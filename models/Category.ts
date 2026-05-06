import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Category = mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
