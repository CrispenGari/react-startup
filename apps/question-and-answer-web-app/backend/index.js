const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost" || "127.0.0.1";
app.use(cors());
app.use(express.json());
app.get("/model.json", (req, res) => {
  res.status(200).sendFile(path.resolve("model.json"));
});
app.listen(port, host, (error) => {
  if (error) {
    return console.error(error);
  }
  console.log(`The server is running at:  http://${host}:${port}`);
});
