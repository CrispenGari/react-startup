import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
  username: String,
  timestamp: String,
  message: String,
  photoURL: String,
});

export default mongoose.model("messages", messagesSchema);
