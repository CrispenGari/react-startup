// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connection_db_url from "./connection.js";
import posts from "./models.js";
import pusher from "./pusher.js";

// variables
const app = express();
const port = process.env.PORT || 3001;
const host = "localhost" || "127.0.0.1";
// midlewares
app.use(express.json());
app.use(cors());

// db-magic

mongoose.connect(connection_db_url, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const database = mongoose.connection;
database.once("open", () => {
  console.log("A database has been succesifully connected");
  const postsCollection = database.collection("posts");
  const postsStream = postsCollection.watch();
  postsStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const postDetails = change.fullDocument;
      console.log(postDetails);
      pusher.trigger("posts", "insert", {
        username: postDetails.username,
        caption: postDetails.caption,
        timestamp: postDetails.timestamp,
        userAvatar: postDetails.userAvatar,
        userEmail: postDetails.userEmail,
        imgurl: postDetails.imgurl,
        docUrl: postDetails.docUrl,
        vidUrl: postDetails.vidUrl,
        comments: postDetails.comments,
      });
    }
  });
});
// routes
app.get("/", (req, res) =>
  res.status(200).send("This backend is working fine!!!")
);
// querying all post
app.get("/v1/posts/sync", (req, res) => {
  posts.find({}, (error, data) => {
    if (!error) {
      res.status(200).send(data);
    } else {
      res.status(500).send(error);
    }
  });
});
// querying a post of a given id
app.get("/v1/posts/sync/:postId", (req, res) => {
  const post_id = req.params;
  /*
  req.params returns an object 
  const {postId} = req.params;
  */
  posts.find({ _id: post_id.postId }, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v1/posts/post", (req, res) => {
  const post_data = req.body;
  posts.create(post_data, (error, data) => {
    if (!error) {
      res.status(201).send(data);
    } else {
      res.status(500).send(error);
    }
  });
});
// starting the sever
app.listen(port, (error) => {
  if (error) {
    console.log("An error has occured: ", error);
    return;
  }
  console.log(`THE SERVER IS RUNNING ON PORT: ${port}`);
  console.log(`ON YOUR LOCAL MACHINE VISIT: http://${host}:${port}`);
});
