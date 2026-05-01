import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import ScheduleCall from "@/models/ScheduleCall";

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { selectedDay, selectedTime, fullName, email, topic } = body;

    if (!selectedDay || !selectedTime || !fullName || !email || !topic) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const newSchedule = await ScheduleCall.create({
      selectedDay,
      selectedTime,
      fullName,
      email,
      topic,
    });

    return NextResponse.json(
      { success: true, data: newSchedule, message: "Call scheduled successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error scheduling call:", error);
    return NextResponse.json(
      { error: "Failed to schedule call.", details: error.message },
      { status: 500 }
    );
  }
}
