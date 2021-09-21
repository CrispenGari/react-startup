// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connection_url from "./connection/connection.js";
import model from "./models/models.js";

// variables
const port = 3001 || process.env.PORT;
const app = express();
// midleways
app.use(express.json());
app.use(cors());
// database logic
mongoose.connect(connection_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const database = mongoose.connection;

database.once("open", () => {
  console.log("You are now connected to the database");
});
// routes
app.get("/", (req, res) => {
  res.status(200).send("This is a shopping appa");
});

app.get("/v1/product/:category", (req, res) => {
  const { category } = req.params;

  model.find({ product_category: category }, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v1/product", (req, res) => {
  const product_details = req.body;
  model.create(product_details, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});
// listening
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(`The server is running on port ${port}`);
    console.log(`On your local machine visit: http://localhost:${port}`);
  }
});
