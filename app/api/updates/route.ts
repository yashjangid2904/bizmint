import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import RbiUpdate from "@/models/RbiUpdate";

export async function GET(req: Request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const sourceType = searchParams.get("sourceType");
    const fromDate = searchParams.get("fromDate");
    const toDate = searchParams.get("toDate");
    const limit = parseInt(searchParams.get("limit") || "100", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);
    
    const query: any = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (sourceType && sourceType !== "All") {
      query.sourceType = sourceType;
    }

    if (fromDate || toDate) {
      query.date = {};
      if (fromDate) {
        query.date.$gte = new Date(fromDate);
      }
      if (toDate) {
        query.date.$lte = new Date(toDate);
      }
    }

    const skip = (page - 1) * limit;

    const updates = await RbiUpdate.find(query)
      .sort({ date: -1, fetchedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await RbiUpdate.countDocuments(query);

    return NextResponse.json({
      updates,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Failed to fetch regulatory updates", error);
    return NextResponse.json({ error: "Failed to fetch regulatory updates" }, { status: 500 });
  }
}
