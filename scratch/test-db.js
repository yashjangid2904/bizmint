const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI not found");
  process.exit(1);
}

async function test() {
  try {
    console.log("Connecting to:", MONGODB_URI.substring(0, 20) + "...");
    await mongoose.connect(MONGODB_URI, { family: 4 });
    console.log("Success!");
    process.exit(0);
  } catch (err) {
    console.error("Failed:", err.message);
    process.exit(1);
  }
}

test();
