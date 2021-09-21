import React, { useState, useEffect } from "react";
import "./Uploader.css";
import { IoMdCamera } from "react-icons/io";
import { IconButton } from "@material-ui/core";
import categories from "../../utils/categories";

import { useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import firebase from "../../backend";

import { LinearProgress } from "@material-ui/core";

const Uploader = () => {
  const user = useSelector((state) => state.user);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  const [productPreviousPrice, setProductPreviousPrice] = useState("");
  const [productDeliveryPrice, setProductDeliveryPrice] = useState("");
  const [productSale, setProductSale] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const uploadProduct = (e) => {
    e.preventDefault();
    if (image) {
      const uploadTask = firebase.storage
        .ref(`images/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          firebase.storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              // Post an image
              const data = {
                description: productDescription,
                image: url,
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
              };

              if (Object.keys(data).length > 0) {
                firebase.db
                  .collection("products")
                  .add(data)
                  .then(() => {
                    console.log("Product Added");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            })
            .catch((e) => {
              console.log(e);
            })
            .finally(() => {
              setImage(null);
              setProductCategory("");
              setProductDeliveryPrice("");
              setProductDiscount("");
              setProductDescription("");
              setPreview("");
              setProductPrice("");
              setProductPreviousPrice("");
              setProductSale(false);
              setProductCategory("Books");
              setUploadProgress(0);
            });
        }
      );
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);
  return (
    <form onSubmit={uploadProduct} className="uploader">
      <h1>Upload New Product to the Market!</h1>
      <div className="uploader__add">
        {uploadProgress > 0 && (
          <LinearProgress variant="determinate" value={uploadProgress} />
        )}
        <h1>Add New</h1>
        <div className="uploader__add__controls">
          <input
            className={productDescription.length === 0 ? "uploader__error" : ""}
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />
          <input
            className={productPrice.length === 0 ? "uploader__error" : ""}
            type="text"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
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
          <input type="text" placeholder="Product Custom Id" />

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
          <label htmlFor="uploader___file__input">
            <IconButton className="uploader__icon__button" component="span">
              <IoMdCamera className="uploader__icon__button__icon" />
            </IconButton>
            <input
              onChange={handleChange}
              accept="image/*"
              multiple={false}
              type="file"
              id="uploader___file__input"
            />
          </label>
          <Alert severity="warning" className="uploader__alert">
            <AlertTitle>
              <strong>Warning</strong> - {user?.displayName?.split(" ")[0]}
            </AlertTitle>
            Please take note of that{": "}
            <strong>
              This site doesn't allow e-payments your customers must contact you
              via, email if they are interested in your products.
            </strong>
          </Alert>
        </div>
        {image && (
          <div className="uploader__add__preview">
            <h1>Product Image Preview</h1>
            <img src={preview} alt="product-preview" />
          </div>
        )}
        <button>Add to Market</button>
      </div>
    </form>
  );
};

export default Uploader;
