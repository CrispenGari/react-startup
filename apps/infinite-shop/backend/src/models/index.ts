import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
  displayName: String,
  email: String,
});
const ProductSchema = new mongoose.Schema({
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

const productModel = mongoose.model("products", ProductSchema);
export default productModel;
