import { Schema, model } from "mongoose";
const UsersSchema = new Schema(
  {
    adminEmail: {
      type: String,
      required: true,
    },
    adminPassword: {
      type: String,
      required: true,
    },
  },
  { collection: "GuestDetails" }
);

export default model("Guest", UsersSchema);
