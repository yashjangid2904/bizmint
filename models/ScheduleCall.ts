import mongoose, { Schema, Document } from "mongoose";

export interface IScheduleCall extends Document {
  selectedDay: string;
  selectedTime: string;
  fullName: string;
  email: string;
  topic: string;
  createdAt: Date;
}

const ScheduleCallSchema: Schema = new Schema(
  {
    selectedDay: {
      type: String,
      required: [true, "Selected day is required"],
    },
    selectedTime: {
      type: String,
      required: [true, "Selected time is required"],
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ScheduleCall = mongoose.models.ScheduleCall || mongoose.model<IScheduleCall>("ScheduleCall", ScheduleCallSchema);

export default ScheduleCall;
