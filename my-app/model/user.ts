import mongoose, { Schema } from "mongoose";

interface ADMINS {
  name: string;
  email: string;
  password: string;
  role: string;
}

const adminSchema = new Schema<ADMINS>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const USER = mongoose.models.User || mongoose.model("User", adminSchema);

export default USER;
