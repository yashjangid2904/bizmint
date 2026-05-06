import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const featured = searchParams.get("featured");

    const query: any = { isPublished: true };
    
    if (category && category !== "All") {
      query.category = category;
    }
    
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    
    if (featured === "true") {
      query.featured = true;
    }

    const resources = await Resource.find(query).sort({ createdAt: -1 });
    return NextResponse.json(resources);
  } catch (error) {
    console.error("Failed to fetch resources", error);
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
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

    // Basic slug generation if not provided
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    const resource = await Resource.create(data);
    return NextResponse.json(resource, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create resource", error);
    // Handle duplicate slug
    if (error.code === 11000) {
       return NextResponse.json({ error: "A resource with this title/slug already exists" }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to create resource" }, { status: 500 });
  }
}
