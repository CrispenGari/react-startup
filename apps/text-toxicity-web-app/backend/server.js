import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import connection from "./connection/connection.js";
import models from "./models/models.js";
import { error } from "console";
// host and port
const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost" || "127.0.0.1";
// App config
const app = express();
//  Midleways
app.use(express.json());
app.use(cors());

// database config
mongoose.connect(connection, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const database = mongoose.connection;
database.once("open", () => {
  console.log(
    "The database is open! Connection has been established successfully."
  );
});
// getting routes

app.get("/", (req, res) => {
  setTimeout(() => {
    res.status(200).redirect("/history");
  }, 1000);
});
app.get("/history", (req, res) => {
  models.find({}, (error, model) => {
    if (error) {
      res.status(500).send({
        message: http.STATUS_CODES[500],
        statusCode: 500,
        error: error,
      });
    } else {
      res.status(200).send({
        message: http.STATUS_CODES[200],
        data: model,
        statusCode: 200,
      });
    }
  });
});

// posting routes
app.post("/history", (req, res) => {
  const history = req.body;
  models.create(history, (error, data) => {
    if (error) {
      res.status(500).send({
        message: http.STATUS_CODES[500],
        statusCode: 500,
        error: error,
      });
    } else {
      res.status(201).send({
        message: http.STATUS_CODES[201],
        statusCode: 201,
        data: data,
      });
    }
  });
});
// deleting a post
app.delete("/history/:historyId", (req, res) => {
  const { historyId } = req.params;
  models.deleteOne({ _id: historyId }, (err, data) => {
    if (err) {
      res.status(500).send({
        message: http.STATUS_CODES[500],
        statusCode: 500,
        error: error,
      });
    } else {
      res
        .status(200)
        .send({ message: http.STATUS_CODES[200], data: data, statusCode: 200 });
    }
  });
});

app.listen(port, host, (error) => {
  if (error) {
    return console.log(error);
  } else {
    console.log(`The server is listening on ${port}`);
    console.log(`Visit: http://${host}:${port}`);
  }
  return null;
});
