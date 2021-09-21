// IMPORTS
import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import password from "./databasePassword.js";
import videos from "./models.js";
// VARIABLES
const port = process.env.PORT || 5000;
const app = express();
const database_name = "post";
const dbconnection_url = `mongodb+srv://crispen:${password}@cluster0.hxadc.mongodb.net/${database_name}?retryWrites=true&w=majority`;

// DATABASE LOGIC
mongoose.connect(dbconnection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// MIDLEWAYS
/*
This midle-way allows us to pass some json data
*/
app.use(express.json());
/*
This midle-way allows us to access data from the backend using an api call
to the frontend
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "*");
  next();
});
// ROUTES

app.get("/", (req, res) => {
  // we can even show a home page here!!
  res.status(200).send("EVERYTHING IS FINE RIGHT NOW");
});
// test call at v1/post route
app.get("/v1/post", (req, res) => {
  res.status(200).send(data);
});
app.get("/v2/post", (req, res) => {
  videos.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/v2/post", (req, res) => {
  const databaseVids = req.body;
  videos.create(databaseVids, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`The app is running on port ${port}`);
});
