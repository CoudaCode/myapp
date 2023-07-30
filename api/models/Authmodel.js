import { Schema, model } from "mongoose";
const UsersSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    conPassword: {
      type: String,
      required: true,
    },
  }
);

export default model("Auths", UsersSchema);
