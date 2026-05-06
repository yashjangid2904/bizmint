import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Video from "@/models/Video";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const videos = await Video.find().sort({ publishedAt: -1, createdAt: -1 });
    return NextResponse.json(videos);
  } catch (error) {
    console.error("Failed to fetch videos", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const data = await req.json();

    const video = await Video.create(data);
    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    console.error("Failed to create video", error);
    return NextResponse.json({ error: "Failed to create video" }, { status: 500 });
  }
}
