import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    // 1. Connect to the database
    await connectToDatabase();

    // 2. Extract data from request body
    const body = await request.json();
    const { fullName, email, phone, service, message } = body;

    // 3. Validate required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full Name, Email, and Phone are required." },
        { status: 400 }
      );
    }

    // 4. Create new contact document in MongoDB
    const newContact = await Contact.create({
      fullName,
      email,
      phone,
      service,
      message,
    });

    // 5. Return success response
    return NextResponse.json(
      { success: true, data: newContact, message: "Contact request submitted successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact request.", details: error.message },
      { status: 500 }
    );
  }
}
