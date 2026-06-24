import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// Manual .env.local parsing (must run before importing anything that depends on process.env)
if (fs.existsSync(".env.local")) {
  const envContent = fs.readFileSync(".env.local", "utf8");
  envContent.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim();
        // Remove quotes if present
        const cleanVal = val.replace(/^["']|["']$/g, "");
        process.env[key] = cleanVal;
      }
    }
  });
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env.local");
  process.exit(1);
}

async function run() {
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI!);
    console.log("✅ MongoDB connected successfully.");

    // Dynamically import scraper to ensure env variables are loaded first
    const { runAllRbiScrapers } = await import("../lib/rbiScraper");

    console.log("⚙️  Running RBI Scrapers (this may take up to 30 seconds for first run)...");
    const stats = await runAllRbiScrapers();
    console.log("📊 Scraping stats:", stats);

    // Retrieve RbiUpdate model
    const RbiUpdate = (await import("../models/RbiUpdate")).default;
    
    // Count total documents in DB
    const count = await RbiUpdate.countDocuments();
    console.log(`📈 Total updates in database: ${count}`);

    // Query 3 latest updates
    const latest = await RbiUpdate.find().sort({ date: -1 }).limit(3).lean();
    console.log("\n📰 Latest 3 updates in Database:");
    latest.forEach((item: any, idx: number) => {
      console.log(`\n--- Update #${idx + 1} ---`);
      console.log(`Title: ${item.title}`);
      console.log(`Source Type: ${item.sourceType}`);
      console.log(`Date: ${item.date instanceof Date ? item.date.toISOString().split("T")[0] : item.date}`);
      console.log(`Link: ${item.link}`);
      console.log(`Content Size: ${item.content.length} characters`);
      console.log(`Fetched At: ${item.fetchedAt}`);
    });

    await mongoose.disconnect();
    console.log("\n🔌 Database disconnected. Test complete.");
    process.exit(0);
  } catch (err: any) {
    console.error("❌ Test script failed with error:", err);
    process.exit(1);
  }
}

run();
