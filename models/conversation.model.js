import mongoose from "mongoose";
const { Schema } = mongoose;
const ConversationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  selleriId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  readBySeller: {
    type: Boolean,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    required: true,
  },
  lastMessage: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Conversation", ConversationSchema);
