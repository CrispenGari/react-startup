import React, { useState } from "react";
import "./Product.css";
import { Rating } from "@material-ui/lab";
import { Price } from "../../components";
import { IconButton, Modal } from "@material-ui/core";
import { FaCartPlus } from "react-icons/fa";
import { FavoriteBorder } from "@material-ui/icons";
import { Qnty, Edit } from "../../components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import firebase from "../../backend";

const Product = ({ product, id, editable, setShowAlert }) => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const deleteProduct = async () => {
    if (id) {
      await firebase.db
        .collection("products")
        .doc(id)
        .delete()
        .then(() => {
          firebase.storage
            .ref()
            .child(
              `images/${String(product?.image).split("%2F")[1]?.split("?")[0]}`
            )
            .delete();
          setShowAlert({
            error: false,
            tittle: "Deleting Product Message",
            message: "Your product was removed from the market.",
          });
        })
        .catch((error) => {
          setShowAlert({
            error: true,
            tittle: "Deleting Product Message",
            message: "Failed to delete the product in the market.",
          });
        });
    }
  };
  return (
    <div className="product">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="product__modal"
      >
        {editable ? (
          <Edit
            product={product}
            setOpen={setOpen}
            id={id}
            setShowAlert={setShowAlert}
          />
        ) : (
          <Qnty product={product} setOpen={setOpen} />
        )}
      </Modal>
      <div className="product__badges">
        {product?.isBestSeller ? (
          <div className="product__tag__best__seller">best seller</div>
        ) : (
          <div></div>
        )}
        {product?.isOnSale ? (
          <div className="product__tag__sale">Sale</div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="product__image">
        <img src={product?.image} alt="product" />
        <div className="product__cover"></div>
      </div>
      <div className="product__description">
        <p>
          {product?.description}
          <span>{product?.seller?.displayName}</span>
        </p>
      </div>
      <div className="product__ratings">
        <Rating name="size-small" value={product?.ratings} size="small" />
      </div>
      <div className="product__prices">
        <Price
          previousPrice={product?.previousPrice}
          price={product?.price}
          delivery={product?.delivery}
        />
      </div>
      {editable ? (
        <div className="product__controls">
          <IconButton
            onClick={() => {
              if (user) {
                setOpen(true);
              } else {
                history.push("/login");
              }
            }}
            title={"Edit"}
          >
            <AiFillEdit />
          </IconButton>
          <IconButton title={"Delete"} onClick={deleteProduct}>
            <MdDelete />
          </IconButton>
        </div>
      ) : (
        <div className="product__controls">
          <IconButton
            onClick={() => {
              if (user) {
                setOpen(true);
              } else {
                history.push("/login");
              }
            }}
          >
            <FaCartPlus />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Product;
