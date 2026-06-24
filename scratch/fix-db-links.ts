import fs from "fs";
import mongoose from "mongoose";

// Manual .env.local parsing
if (fs.existsSync(".env.local")) {
  const envContent = fs.readFileSync(".env.local", "utf8");
  envContent.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim();
        const cleanVal = val.replace(/^["']|["']$/g, "");
        process.env[key] = cleanVal;
      }
    }
  });
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found");
  process.exit(1);
}

async function run() {
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI!);
    console.log("✅ Database connected.");

    const RbiUpdate = (await import("../models/RbiUpdate")).default;

    // Find all notifications that have incorrect relative links
    const incorrectUpdates = await RbiUpdate.find({
      link: { $regex: "rbi.org.in/NotificationUser.aspx", $options: "i" }
    });

    console.log(`Found ${incorrectUpdates.length} records with incorrect links. Migrating...`);

    let count = 0;
    for (const update of incorrectUpdates) {
      const oldLink = update.link;
      const newLink = oldLink.replace("/NotificationUser.aspx", "/scripts/NotificationUser.aspx");
      
      // Update link in database
      update.link = newLink;
      await update.save();
      count++;
    }

    console.log(`🎉 Successfully updated ${count} updates with corrected official links.`);
    
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB. Migration completed.");
    process.exit(0);
  } catch (err: any) {
    console.error("❌ Migration failed with error:", err.message);
    process.exit(1);
  }
}

run();
