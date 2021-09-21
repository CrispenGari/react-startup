import React, { useState } from "react";
import "./Edit.css";
import { Price } from "../../components";
import { Rating } from "@material-ui/lab";
import { useSelector } from "react-redux";
import categories from "../../utils/categories";

import firebase from "../../backend";

const Edit = ({ product, setOpen, id, setShowAlert }) => {
  const user = useSelector((state) => state.user);

  const [productDescription, setProductDescription] = useState(
    product?.description
  );
  const [productPrice, setProductPrice] = useState(product?.price);
  const [productDiscount, setProductDiscount] = useState(product?.discount);
  const [productPreviousPrice, setProductPreviousPrice] = useState(
    product?.previousPrice
  );
  const [productDeliveryPrice, setProductDeliveryPrice] = useState(
    product?.delivery
  );
  const [productSale, setProductSale] = useState(product?.isOnSale);
  const [productCategory, setProductCategory] = useState(product?.category);

  const updateProduct = async () => {
    setShowAlert(true);
    if (id) {
      await firebase.db
        .collection("products")
        .doc(id)
        .update({
          description: productDescription,
          price: Number(productPrice),
          seller: {
            displayName: user?.displayName,
            email: user?.email,
          },
          delivery: Number(productDeliveryPrice),
          previousPrice: Number(productPreviousPrice),
          isBestSeller: true,
          isOnSale: productSale,
          ratings: 5,
          category: productCategory,
          email: user?.email,
          discount: Number(productDiscount),
        })
        .then(() => {
          setShowAlert({
            error: false,
            tittle: "Updating Product Message",
            message: "Your product details has been updated.",
          });
        })
        .catch((error) => {
          setShowAlert({
            tittle: "Updating Product Message",
            error: true,
            message: "Failed to Update a product.",
          });
        })
        .finally(() => {
          setOpen(false);
        });
    }
  };

  return (
    <div className="edit">
      <h1>{product.description}</h1>
      <div className="edit__main">
        <div className="edit__left">
          <img src={product?.image} alt="product" />
          <div className="edit__product__info">
            <Rating
              name="size-small"
              defaultValue={product?.ratings}
              size="small"
            />
            <Price
              previousPrice={product.previousPrice}
              price={product.price}
              delivery={product.delivery}
            />
          </div>
        </div>
        <div className="edit__right">
          <h1>Edit Product</h1>
          <div className="edit__right__form">
            <input
              type="text"
              placeholder="Product Description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Delivery Price"
              value={productDeliveryPrice}
              onChange={(e) => setProductDeliveryPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Percentage Discount"
              value={productDiscount}
              onChange={(e) => setProductDiscount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Previous Price"
              value={productPreviousPrice}
              onChange={(e) => setProductPreviousPrice(e.target.value)}
            />
            <select
              value={productSale}
              onChange={(e) => setProductSale(e.target.value)}
            >
              {["Not on Sale", "Sale"].map((cate, index) => (
                <option key={index} value={cate === "Sale"}>
                  {cate}
                </option>
              ))}
            </select>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              {categories
                .filter((cate_) => cate_.toLowerCase() !== "all products")
                .map((cate, index) => (
                  <option key={index} value={cate}>
                    {cate}
                  </option>
                ))}
            </select>
            <button onClick={updateProduct}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
