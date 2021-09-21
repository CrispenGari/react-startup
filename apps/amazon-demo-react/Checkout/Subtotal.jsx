import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-formatter";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <b>{`${value}`}</b>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        prefix={"$"}
        thousandSeparator={true}
        decimalType={"text"}
      />

      <p className="subtotal__gift">
        <input type="checkbox" /> This other order contains
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
