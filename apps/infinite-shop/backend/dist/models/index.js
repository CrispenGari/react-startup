"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SellerSchema = new mongoose_1.default.Schema({
    displayName: String,
    email: String,
});
const ProductSchema = new mongoose_1.default.Schema({
    description: String,
    image: String,
    price: Number,
    seller: SellerSchema,
    delivery: Number,
    previousPrice: Number,
    isBestSeller: Boolean,
    isOnSale: Boolean,
    ratings: Number,
    category: String,
    customId: String,
    email: String,
    discount: Number,
});
const productModel = mongoose_1.default.model("products", ProductSchema);
exports.default = productModel;
//# sourceMappingURL=index.js.map