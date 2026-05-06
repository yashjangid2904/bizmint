import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const params = await props.params;
    
    // We try to find by ID first, then by slug if it's not a valid ObjectId
    const query = params.id.match(/^[0-9a-fA-F]{24}$/) 
      ? { _id: params.id } 
      : { slug: params.id };

    const resource = await Resource.findOne(query);
    
    if (!resource) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }
    
    return NextResponse.json(resource);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch resource" }, { status: 500 });
  }
}

export async function PUT(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const data = await req.json();
    const params = await props.params;

    const resource = await Resource.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
    
    if (!resource) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }
    
    return NextResponse.json(resource);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update resource" }, { status: 500 });
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
    const resource = await Resource.findByIdAndDelete(params.id);
    
    if (!resource) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Resource deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete resource" }, { status: 500 });
  }
}
