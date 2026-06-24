const axios = require("axios");

async function testFetch() {
  console.log("Fetching RBI RSS feed...");
  try {
    const res = await axios.get("https://www.rbi.org.in/pressreleases_rss.xml", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/xml, text/xml, */*",
      },
      timeout: 15000
    });
    console.log("Status Code:", res.status);
    console.log("Content length:", res.data.length);
    console.log("Snippet:");
    console.log(res.data.substring(0, 500));
  } catch (err) {
    console.error("Error fetching page:", err.message);
  }
}

testFetch();
