import mongoose from "mongoose";

const ProductScheme = mongoose.Schema({
  product_name: String,
  product_price: Number,
  product_id: Number,
  product_category: String,
  product_rating: Number,
  product_description: String,
  product_image: String,
});
const schema_name = "products";
const _ = mongoose.model(schema_name, ProductScheme);
export default _;
