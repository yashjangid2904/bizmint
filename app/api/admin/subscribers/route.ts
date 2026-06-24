import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import NewsletterSubscriber from "@/models/NewsletterSubscriber";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(req: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const subscribers = await NewsletterSubscriber.find({}).sort({ createdAt: -1 });
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error("Failed to fetch subscribers:", error);
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
  }
}
