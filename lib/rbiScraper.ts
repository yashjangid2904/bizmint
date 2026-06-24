import axios from "axios";
import * as cheerio from "cheerio";
import Parser from "rss-parser";
import RbiUpdate from "@/models/RbiUpdate";
import connectToDatabase from "@/lib/mongodb";

const parser = new Parser();

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5",
};

function cleanHtml(html: string): string {
  if (!html) return "";
  const $ = cheerio.load(html);

  // Strip scripts, styles, and empty elements
  $("script, style, noscript, iframe").remove();

  // Iterate over all elements to preserve visual hierarchy
  $("*").each((_, el) => {
    const $el = $(el);
    const style = $el.attr("style") || "";
    const className = $el.attr("class") || "";

    const isBold = /font-weight\s*:\s*(bold|700|800|900)/i.test(style) || 
                   /bold/i.test(className) || 
                   /tableheader/i.test(className) ||
                   $el.is("th");
                   
    const isUnderline = /text-decoration\s*:\s*underline/i.test(style) || 
                        /underline/i.test(className);

    const isItalic = /font-style\s*:\s*italic/i.test(style) || 
                     /italic/i.test(className);

    if (isBold && !$el.is("strong, b, h1, h2, h3, h4, h5, h6")) {
      $el.html(`<strong>${$el.html()}</strong>`);
    }

    if (isUnderline && !$el.is("u")) {
      $el.html(`<u>${$el.html()}</u>`);
    }

    if (isItalic && !$el.is("em, i")) {
      $el.html(`<em>${$el.html()}</em>`);
    }
  });

  // Remove inline styles and classes from all elements to let Tailwind take over
  $("*").removeAttr("style").removeAttr("class").removeAttr("id").removeAttr("align").removeAttr("valign").removeAttr("bgcolor");

  // Convert broken PDF relative image indicators into clean structured text links
  $("a").each((_, el) => {
    const $el = $(el);
    const img = $el.find("img");
    if (img.length > 0) {
      const altText = img.attr("alt") || "";
      if (altText) {
        $el.html(`<span class="inline-flex items-center gap-1 font-semibold bg-red-50 text-red-700 border border-red-100 px-2 py-0.5 rounded text-[11px] mr-1.5 align-middle select-none">PDF</span> <span class="align-middle">${altText.replace(/^PDF\s*-\s*/i, "")}</span>`);
      }
    }
  });

  // Inject Tailwind classes for elegant and responsive rendering
  $("table").addClass("w-full border-collapse text-left border border-zinc-200 dark:border-zinc-800 my-6 text-sm overflow-x-auto block md:table");
  $("thead").addClass("bg-zinc-50 dark:bg-zinc-900/50");
  $("th").addClass("bg-zinc-100 dark:bg-zinc-900 p-3 border border-zinc-200 dark:border-zinc-800 font-semibold text-zinc-800 dark:text-zinc-200");
  $("td").addClass("p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300");
  $("tr").addClass("hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors");
  $("p").addClass("mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed");
  $("a").addClass("text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors");
  $("h1, h2, h3, h4, h5, h6").addClass("font-bold text-zinc-900 dark:text-white mb-3 mt-6");
  $("ul").addClass("list-disc mb-4 pl-6 text-zinc-700 dark:text-zinc-300");
  $("ol").addClass("list-decimal mb-4 pl-6 text-zinc-700 dark:text-zinc-300");
  $("li").addClass("mb-1.5");

  return $("body").html() || $.html();
}

/**
 * Fetches Press Releases from RBI RSS feed
 */
export async function fetchRbiPressReleases(): Promise<number> {
  console.log("Fetching RBI Press Releases via RSS...");
  let count = 0;
  try {
    const res = await axios.get("https://www.rbi.org.in/pressreleases_rss.xml", {
      headers: HEADERS,
      timeout: 15000,
    });
    const feed = await parser.parseString(res.data);

    for (const item of feed.items) {
      if (!item.link || !item.title) continue;

      const START_DATE = new Date("2024-06-22");
      const prDate = item.pubDate ? new Date(item.pubDate) : new Date();
      if (prDate.getTime() < START_DATE.getTime()) {
        continue;
      }

      const exists = await RbiUpdate.findOne({ link: item.link });
      if (exists) continue;

      try {
        const detailRes = await axios.get(item.link, { headers: HEADERS, timeout: 15000 });
        const $ = cheerio.load(detailRes.data);
        
        let rawContent = $(".tablebg").html() || $("#divContent").html() || $("body").html() || "";
        const sanitizedContent = cleanHtml(rawContent);

        await RbiUpdate.create({
          title: item.title,
          link: item.link,
          date: prDate,
          sourceType: "Press Release",
          content: sanitizedContent
        });
        console.log(`Saved Press Release: ${item.title}`);
        count++;
      } catch (err: any) {
        console.error(`Failed to scrape content for: ${item.link}`, err.message);
      }
    }
  } catch (err: any) {
    console.error("Error fetching RBI RSS feed:", err.message);
  }
  return count;
}

/**
 * Scrapes RBI Notifications and Drafts using Axios & Cheerio
 */
export async function fetchRbiNotificationsAndDrafts(): Promise<{ notifications: number; drafts: number }> {
  console.log("Scraping RBI Notifications and Drafts...");
  let notificationsCount = 0;
  let draftsCount = 0;

  const scrapeSection = async (url: string, sourceType: "Notification" | "Draft"): Promise<number> => {
    let savedCount = 0;
    try {
      console.log(`Scraping RBI ${sourceType}s list from: ${url}`);
      const res = await axios.get(url, { headers: HEADERS, timeout: 20000 });
      const $ = cheerio.load(res.data);

      const itemLinks: { title: string; link: string }[] = [];
      
      // Select anchor links inside table.tablebg a.link2 or table.tablebg a
      $("table.tablebg a.link2, table.tablebg a").each((_, el) => {
        const title = $(el).text().trim();
        const href = $(el).attr("href");
        if (href && title) {
          // Resolve relative links
          const resolvedLink = href.startsWith("http") 
            ? href 
            : new URL(href, url).href;

          // Push if not duplicate in our in-memory list
          if (!itemLinks.some(item => item.link === resolvedLink)) {
            itemLinks.push({ title, link: resolvedLink });
          }
        }
      });

      console.log(`Found ${itemLinks.length} list links for ${sourceType}. Checking DB...`);

      for (const item of itemLinks) {
        const exists = await RbiUpdate.findOne({ link: item.link });
        if (exists) continue;

        try {
          const detailRes = await axios.get(item.link, { headers: HEADERS, timeout: 15000 });
          const detail$ = cheerio.load(detailRes.data);

          let rawContent = detail$(".tablebg").html() || detail$("#divContent").html() || detail$("body").html() || "";
          const sanitizedContent = cleanHtml(rawContent);

          // Attempt to extract publication date from the body text
          const pageText = detail$("body").text();
          const dateMatch = pageText.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b/i);
          let itemDate = new Date();
          if (dateMatch) {
            const parsed = new Date(dateMatch[0]);
            if (!isNaN(parsed.getTime())) {
              itemDate = parsed;
            }
          }

          // Skip if before start date limit
          const START_DATE = new Date("2024-06-22");
          if (itemDate.getTime() < START_DATE.getTime()) {
            continue;
          }

          await RbiUpdate.create({
            title: item.title,
            link: item.link,
            date: itemDate,
            sourceType,
            content: sanitizedContent
          });
          
          console.log(`Saved ${sourceType}: ${item.title} (${itemDate.toISOString().split("T")[0]})`);
          savedCount++;
        } catch (err: any) {
          console.error(`Failed to scrape item ${item.link}:`, err.message);
        }
      }
    } catch (err: any) {
      console.error(`Error during ${sourceType} scraping:`, err.message);
    }
    return savedCount;
  };

  // Run scrapers
  notificationsCount = await scrapeSection("https://www.rbi.org.in/scripts/NotificationUser.aspx", "Notification");
  draftsCount = await scrapeSection("https://www.rbi.org.in/scripts/DraftUser.aspx", "Draft");

  return { notifications: notificationsCount, drafts: draftsCount };
}

/**
 * Orchestrator to run all scraping tasks
 */
export async function runAllRbiScrapers(): Promise<{ pressReleases: number; notifications: number; drafts: number }> {
  console.log("Starting RBI Scrapers...");
  await connectToDatabase();
  
  const pressReleases = await fetchRbiPressReleases();
  const { notifications, drafts } = await fetchRbiNotificationsAndDrafts();
  
  console.log(`RBI Scrapers Finished. PRs: ${pressReleases}, Notifications: ${notifications}, Drafts: ${drafts}`);
  return { pressReleases, notifications, drafts };
}
