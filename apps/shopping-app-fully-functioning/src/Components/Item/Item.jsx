import { Button } from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
import React, { useState } from "react";
import CountUp from "react-countup";
import "./Item.css";
import { useSelector, useDispatch } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import { addToBasket, removeFromBasket } from "../../actions";
import { useHistory } from "react-router-dom";
function Item({ rating, price, title, src, product_id, long, basket_iterm }) {
  const [diff] = useState(5 - rating);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication?.value);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleRemoveFromoCart = (rating, title, price, product_id) => {
    dispatch(
      removeFromBasket({
        rating: rating,
        title: title,
        price: price,
        product_id: product_id,
      })
    );
  };
  const handleAddToCart = (product_id) => {
    if (user) {
      dispatch(
        addToBasket({
          id: product_id,
          name: title,
          scr: src,
          price: price,
          ratting: rating,
        })
      );
      setOpen(true);
      setTimeout(() => {
        setOpen(!true);
      }, 2000);
    } else {
      setOpen(true);
      setTimeout(() => {
        setOpen(!true);
      }, 4000);
    }
  };
  return (
    <div className={`item ${long && "item__long"}`}>
      <img src={src} alt="" />
      <div className="item__info">
        <p>{title}</p>
        <CountUp
          className="item__info--price"
          start={0}
          end={price}
          duration={2.75}
          separator=" "
          decimals={2}
          decimal="."
          prefix="R "
        />
        <p className="item__info--ratings">
          {Array(rating)
            .fill(null)
            .map((i) => (
              <Star key={i} />
            ))}
          {/* The stars left bust not be filled with yellow color */}
          {Array(diff)
            .fill(null)
            .map((i) => (
              <StarBorder key={i} />
            ))}
        </p>
        <div className="item__infoButtons">
          {basket_iterm ? (
            <Button
              className="item__infoButton item__remove"
              onClick={() =>
                handleRemoveFromoCart(rating, title, price, product_id)
              }
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              className="item__infoButton"
              onClick={() => handleAddToCart(product_id)}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
      {open && (
        <Alert
          severity={`${user ? "success" : "error"}`}
          className="iterm__alert"
        >
          <AlertTitle>
            Adding To Basket <em>{`${user ? "Success" : "Failed"}`}</em>
          </AlertTitle>
          {user ? (
            <>
              {title} has been added to your basket —{" "}
              <strong>check it out!</strong>
            </>
          ) : (
            <>
              Failed to add {title} to basket login first—{" "}
              <strong
                className="iterm__login"
                onClick={() => history.push("/authentication")}
              >
                Login
              </strong>
            </>
          )}
        </Alert>
      )}
    </div>
  );
}

export default Item;
