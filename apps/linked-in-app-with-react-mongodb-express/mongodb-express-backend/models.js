import mongoose from "mongoose";
const collection_name = "posts";

const commentsSchema = mongoose.Schema({
  username: String,
  timestamp: String,
  comment: String,
  userEmail: String,
  userAvatar: String,
});

const postSchema = mongoose.Schema({
  username: String,
  caption: String,
  timestamp: String,
  userAvatar: String,
  userEmail: String,
  imgurl: String,
  docUrl: String,
  vidUrl: String,
  comments: [commentsSchema],
});

const _ = mongoose.model(collection_name, postSchema);
export default _;

/*
{
    "username": "crispen",
    "caption": "This is a caption",
    "timestamp": "timestamp",
    "userAvatar": "https://lh3.googleusercontent.com/ogw/ADGmqu9JcWE2u7VfVn1BTe2IIsYfdIJsVuvpkspdsCRt=s32-c-mo",
    "userEmail": "crispendev@gmail.com",
    "docUrl": null,
                  "vidUrl": null,
                  "imgurl": "https://lh3.googleusercontent.com/ogw/ADGmqu9JcWE2u7VfVn1BTe2IIsYfdIJsVuvpkspdsCRt=s32-c-mo",
    "comments": [
        {
            "username": "crispen",
            "comment": "This is a comment!!!",
            "timestamp": "timestamp",
            "userAvatar": "https://lh3.googleusercontent.com/ogw/ADGmqu9JcWE2u7VfVn1BTe2IIsYfdIJsVuvpkspdsCRt=s32-c-mo",
            "userEmail": "crispendev@gmail.com"
        },   {
            "username": "crispen",
            "comment": "This is aanother comment",
            "timestamp": "timestamp",
            "userAvatar": "https://lh3.googleusercontent.com/ogw/ADGmqu9JcWE2u7VfVn1BTe2IIsYfdIJsVuvpkspdsCRt=s32-c-mo",
            "userEmail": "crispendev@gmail.com"
        }
    ]
}
*/
