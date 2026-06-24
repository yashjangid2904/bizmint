import mongoose, { Schema, Document } from "mongoose";

export interface IRbiUpdate extends Document {
  title: string;
  link: string;
  date: Date;
  sourceType: "Press Release" | "Notification" | "Draft";
  content: string;
  fetchedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const RbiUpdateSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    sourceType: {
      type: String,
      enum: ["Press Release", "Notification", "Draft"],
      required: true,
    },
    content: { type: String, required: true },
    fetchedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const RbiUpdate = mongoose.models.RbiUpdate || mongoose.model<IRbiUpdate>("RbiUpdate", RbiUpdateSchema);

export default RbiUpdate;
