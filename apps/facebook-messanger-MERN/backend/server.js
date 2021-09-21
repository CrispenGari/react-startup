// imports
import express from "express";
import Pusher from "pusher";
import mongoose from "mongoose";
import cors from "cors";
import connection_url from "./dbUrl.js";
import messages from "./models.js";

// variables
const app = express();
const port = process.env.PORT || 5000;
const pusher = new Pusher({
  appId: "1067548",
  key: "8b324f23cdde5b51d413",
  secret: "832f04b47ca62cd2b95d",
  cluster: "eu",
  encrypted: true,
});
// midleways
app.use(express.json());
app.use(cors());

// db configuration
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const database = mongoose.connection;
database.once("open", () => {
  console.log("A connection has been estabilished!!!");
  const messageCollection = database.collection("messages");
  const messageStream = messageCollection.watch();
  messageStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      console.log(messageDetails);
      pusher.trigger("message", "insert", {
        username: messageDetails.username,
        timestamp: messageDetails.timestamp,
        message: messageDetails.message,
        photoURL: messageDetails.photoURL,
      });
    } else {
      console.log("ERROR OCCURED WHILE TRIGERING THE PUSHER!!!");
    }
  });
});
// routes

app.get("/", (req, res) => {
  res.status(200).send("EVERYTHING IS OKAY FOR NOW");
});
// getting the messages
app.get("/api/v1/messages/sync", (req, res) => {
  messages.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});
// posting a message
app.post("/api/v1/messages", (req, res) => {
  const dbMessages = req.body;
  messages.create(dbMessages, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

// listner
app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`The server is running on port ${port}`);
});
