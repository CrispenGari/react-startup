import React, { useEffect, useState } from "react";
import "./Qnty.css";
import { Price } from "../../components";
import { Rating } from "@material-ui/lab";
import { useDispatch } from "react-redux";

import actions from "../../actions";

const Qnty = ({ product, setOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    Number.parseFloat(product?.price)
  );

  const dispatch = useDispatch();

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const addToBasket = () => {
    const payload = new Array(Number.parseInt(quantity)).fill(product);
    dispatch(actions.setBasket(payload));
    setOpen(false);
  };
  useEffect(() => {
    setTotalPrice(quantity * product?.price);
  }, [quantity, product?.price]);
  return (
    <div className="qnty">
      <h1>{product.description}</h1>
      <div className="qnty__main">
        <div className="qnty__left">
          <img src={product?.image} alt="product" />
          <div className="qnty__product__info">
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
        <div className="qnty__right">
          <h1>Change Quantity</h1>
          <div className="qnty__right__form">
            <input
              type="number"
              min={0}
              max={100}
              placeholder="Change Quantity"
              onChange={onChangeQuantity}
              value={quantity}
            />
            <label htmlFor="total_price">
              Total Price (ZAR)
              <input
                type="number"
                placeholder="Total Products"
                id="total_price"
                disabled
                value={totalPrice}
              />
            </label>
            <button onClick={addToBasket}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qnty;
