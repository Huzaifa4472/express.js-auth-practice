import mongoose from "mongoose";
const { Schema } = mongoose();
const GigSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  totalStars: {
    type: Number,
    default: 0,
  },
  starNumber: {
    type: Number,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },
  shortTitle: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: Number,
    required: true,
  },
  revisionNumber: {
    type: Number,
    required: true,
  },
  features: {
    type: [tring],
    required: false,
  },
  sales: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Gig", GigSchema);
