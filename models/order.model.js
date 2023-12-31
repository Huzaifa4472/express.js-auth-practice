import mongoose from "mongoose";
const { Schema } = mongoose;
const OrderSchema = new Schema({
  gigId: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  buyerId: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  payment_intent: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Order", OrderSchema);
