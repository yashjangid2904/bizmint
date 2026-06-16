import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AdminAccess from './models/AdminAccess.ts';

const MONGODB_URI = process.env.MONGODB_URI;

async function run() {
  try {
    if (!MONGODB_URI) throw new Error("No mongo URI");
    console.log("Connecting to mongo...");
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      family: 4,
    });
    console.log("Connected to mongo");

    console.log("Checking AdminAccess...");
    const adminAccess = await AdminAccess.findOne();
    console.log("AdminAccess found:", adminAccess);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
