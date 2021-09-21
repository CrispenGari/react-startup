import mongose from "mongoose";
const videoSchema = mongose.Schema({
  url: String,
  username: String,
  timestamp: String,
  likes: Number,
});

export default mongose.model("videos", videoSchema);
