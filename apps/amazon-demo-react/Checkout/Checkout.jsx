import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__image"
          src="https://images-na.ssl-images-amazon.com/images/g/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty!!</h2>
            <p>
              You have no items in your basket. To buy one or more click "Add to
              basket" button next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2>Your shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">{basket?.length && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
