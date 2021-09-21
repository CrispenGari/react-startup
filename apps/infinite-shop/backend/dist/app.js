"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = __importDefault(require("./connection"));
const models_1 = __importDefault(require("./models"));
const pusher_1 = __importDefault(require("./pusher"));
// variables
const PORT = process.env.PORT || 3001;
const HOST = "localhost" || "127.0.0.1";
const app = express_1.default();
// midlewares
app.use(cors_1.default());
app.use(express_1.default.json());
// DB config
mongoose_1.default
    .connect(connection_1.default, {
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
const db = mongoose_1.default.connection;
db.once("open", () => {
    const productsCollection = db.collection("products").watch();
    productsCollection.on("change", (change) => {
        console.log("Change....", change);
        if (change.operationType === "insert") {
            const postDetails = change.fullDocument;
            pusher_1.default.trigger("products", "new-product", {
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
    models_1.default.find({}, (error, data) => {
        if (error) {
            res.send({
                error: http_1.default.STATUS_CODES[500],
                code: 500,
            });
        }
        else {
            res.send(data);
        }
    });
});
app.get("/product/:productId/:userEmail", (req, res) => {
    // you can check the email using regular expression
    const { productId, userEmail } = req.params;
    models_1.default.find({
        customId: productId,
        email: userEmail,
    }, (error, data) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(data);
        }
    });
});
app.delete("/product/:productId/:userEmail", (req, res) => {
    const { productId, userEmail } = req.params;
    models_1.default
        .deleteOne({ customId: productId, email: userEmail })
        .then(() => {
        res.status(201).send(http_1.default.STATUS_CODES[200]);
    })
        .catch((error) => {
        res.status(500).send(http_1.default.STATUS_CODES[500]);
    });
});
app.post("/products", (req, res) => {
    const data = req.body;
    models_1.default.create(data, (error, data) => {
        if (error) {
            res.status(500).send({
                error: http_1.default.STATUS_CODES[500],
                code: 500,
            });
        }
        else {
            res.status(200).send(data);
        }
    });
});
// starting the server
app.listen(PORT, HOST, () => {
    console.log("The server is running on port: " + PORT);
    console.log(`Visit: http://${HOST}:${PORT}/`);
});
//# sourceMappingURL=app.js.map