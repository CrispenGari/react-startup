import React, { useContext } from "react";
import { AppContext } from "./context";
import { Types } from "./reducers";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  );
};

export default Products;
