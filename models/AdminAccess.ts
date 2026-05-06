import mongoose, { Schema, Document } from "mongoose";

export interface IAdminAccess extends Document {
  accessCodeHash: string;
}

const AdminAccessSchema: Schema = new Schema(
  {
    accessCodeHash: { type: String, required: true },
  },
  { timestamps: true }
);

const AdminAccess = mongoose.models.AdminAccess || mongoose.model<IAdminAccess>("AdminAccess", AdminAccessSchema);

export default AdminAccess;
