import { Schema, model } from "mongoose";
const UsersSchema = new Schema(
  {
    tname: {
      type: String,
      required: true,
    },
    tdescription: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    tnumber: {
      type: String,
      required: true,
    },
  },
  { collection: "ViewTours" }
);

export default model("Views", UsersSchema);
