import mongoose, { Schema, Document } from "mongoose";

export interface IVideo extends Document {
  title: string;
  description?: string;
  youtubeUrl: string;
  thumbnail?: string;
  featured: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const VideoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    youtubeUrl: { type: String, required: true },
    thumbnail: { type: String },
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

const Video = mongoose.models.Video || mongoose.model<IVideo>("Video", VideoSchema);

export default Video;
