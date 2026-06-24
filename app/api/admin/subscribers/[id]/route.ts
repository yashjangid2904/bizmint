import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import NewsletterSubscriber from "@/models/NewsletterSubscriber";
import { verifyAdmin } from "@/lib/admin-auth";

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const params = await props.params;
    const subscriber = await NewsletterSubscriber.findByIdAndDelete(params.id);

    if (!subscriber) {
      return NextResponse.json({ error: "Subscriber not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Failed to delete subscriber:", error);
    return NextResponse.json({ error: "Failed to delete subscriber" }, { status: 500 });
  }
}
