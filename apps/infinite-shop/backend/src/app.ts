import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import conn from "./connection";
import model from "./models";
import pusher from "./pusher";

// variables
const PORT: any = process.env.PORT || 3001;
const HOST: string = "localhost" || "127.0.0.1";
const app: express.Application = express();

// midlewares
app.use(cors());
app.use(express.json());

// DB config

mongoose
  .connect(conn, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("YOU ARE NOW CONNECTED TO CLOUD MONGODB");
  })
  .catch((error) => {
    console.error(error);
  });
const db = mongoose.connection;
db.once("open", () => {
  const productsCollection = db.collection("products").watch();
  productsCollection.on("change", (change) => {
    console.log("Change....", change);
    if (change.operationType === "insert") {
      const postDetails = change.fullDocument;
      pusher.trigger("products", "new-product", {
        description: postDetails.description,
        image: postDetails.image,
        price: postDetails.price,
        seller: {
          displayName: postDetails.displayName,
          email: postDetails.email,
        },
        delivery: postDetails.delivery,
        previousPrice: postDetails.previousPrice,
        isBestSeller: postDetails.isBestSeller,
        isOnSale: postDetails.isOnSale,
        ratings: postDetails.rattings,
        category: postDetails.category,
      });
    }
  });
  console.log("The connection is open.");
});

// routes
app.get("/", (req, res) => {
  res.status(200).redirect("/products");
});
app.get("/products", (req, res) => {
  model.find({}, (error, data) => {
    if (error) {
      res.send({
        error: http.STATUS_CODES[500],
        code: 500,
      });
    } else {
      res.send(data);
    }
  });
});
app.get("/product/:productId/:userEmail", (req, res) => {
  // you can check the email using regular expression
  const { productId, userEmail } = req.params;
  model.find(
    {
      customId: productId,
      email: userEmail,
    },
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }
  );
});

app.delete("/product/:productId/:userEmail", (req, res) => {
  const { productId, userEmail } = req.params;
  model
    .deleteOne({ customId: productId, email: userEmail })
    .then(() => {
      res.status(201).send(http.STATUS_CODES[200]);
    })
    .catch((error) => {
      res.status(500).send(http.STATUS_CODES[500]);
    });
});

app.post("/products", (req, res) => {
  const data = req.body;
  model.create(data, (error, data) => {
    if (error) {
      res.status(500).send({
        error: http.STATUS_CODES[500],
        code: 500,
      });
    } else {
      res.status(200).send(data);
    }
  });
});

// starting the server
app.listen(PORT, HOST, () => {
  console.log("The server is running on port: " + PORT);
  console.log(`Visit: http://${HOST}:${PORT}/`);
});
