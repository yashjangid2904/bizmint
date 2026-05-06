import mongoose, { Schema, Document } from "mongoose";

export interface IResource extends Document {
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  thumbnail: string;
  featured: boolean;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String },
    featured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent mongoose from creating the model multiple times in development
const Resource = mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);

export default Resource;
