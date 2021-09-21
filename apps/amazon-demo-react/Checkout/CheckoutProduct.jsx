import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
function CheckoutProduct({ item: { image, price, title, rating, id } }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBusket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__product">
      <img src={image} alt="...." />
      <div className="checkout__product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBusket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
