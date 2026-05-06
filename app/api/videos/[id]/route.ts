import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Video from "@/models/Video";
import { verifyAdmin } from "@/lib/admin-auth";

export async function PUT(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const data = await req.json();
    const params = await props.params;

    const video = await Video.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
    
    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
    
    return NextResponse.json(video);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update video" }, { status: 500 });
  }
}

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const params = await props.params;
    const video = await Video.findByIdAndDelete(params.id);
    
    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Video deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete video" }, { status: 500 });
  }
}
