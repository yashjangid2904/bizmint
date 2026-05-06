import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import AdminAccess from "@/models/AdminAccess";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "bizmint-super-secret-key-fallback-change-me";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { secretCode } = await req.json();

    if (!secretCode) {
      return NextResponse.json({ success: false, message: "Code required" }, { status: 400 });
    }

    // Check against DB
    const adminAccess = await AdminAccess.findOne();
    let isValid = false;

    if (adminAccess) {
      isValid = await bcrypt.compare(secretCode, adminAccess.accessCodeHash);
    } else {
      // Fallback: If no DB document exists, use a simple hardcoded env code for initial setup
      const envCode = process.env.ADMIN_SECRET_CODE || "bizmint123";
      if (secretCode === envCode) {
        isValid = true;
        // Auto-seed the database on first successful login
        const hash = await bcrypt.hash(secretCode, 10);
        await AdminAccess.create({ accessCodeHash: hash });
      }
    }

    if (!isValid) {
      return NextResponse.json({ success: false, message: "Access Denied" }, { status: 401 });
    }

    // Create JWT
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "12h" });

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 12 * 60 * 60, // 12 hours
    });

    return NextResponse.json({ success: true, message: "Access Granted" }, { status: 200 });
  } catch (error) {
    console.error("Admin verification error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
