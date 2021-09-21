import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import { Price } from "../../components";
import { BasketQnty } from "../../components";
import { Modal } from "@material-ui/core";
import "./BasketProduct.css";
import CountUp from "react-countup";

const BasketProduct = ({ product }) => {
  const [open, setOpen] = useState(false);

  const removeProductFromBasket = () => {};
  return (
    <div className="basketproduct">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="product__modal"
      >
        <BasketQnty product={product} setOpen={setOpen} />
      </Modal>
      <div className="basketproduct__badges">
        {product?.isBestSeller ? (
          <div className="basketproduct__tag__best__seller">best seller</div>
        ) : (
          <div></div>
        )}
        {product?.isOnSale ? (
          <div className="basketproduct__tag__sale">Sale</div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="basketproduct__image">
        <img src={product?.image} alt="basketproduct" />
        <div className="basketproduct__cover"></div>
      </div>
      <div className="basketproduct__description">
        <p>
          {product?.description}
          <span>{product?.seller?.displayName}</span>
        </p>
      </div>
      <div className="basketproduct__ratings">
        <Rating name="size-small" value={product?.ratings} size="small" />
      </div>
      <div className="basketproduct__prices">
        <Price
          previousPrice={product?.previousPrice}
          price={product?.price}
          delivery={product?.delivery}
        />
      </div>
      <div className="basketproduct__controls">
        <button onClick={removeProductFromBasket}>Remove from Basket</button>
      </div>
      <div className="basket__total__products">
        <h1>Total: {product?.qnty}</h1>
        <button onClick={() => setOpen(true)}>Change Quantity</button>
        <CountUp
          className="basketcontainer__price__countUp"
          start={0}
          end={product?.totalPrice}
          duration={2.75}
          decimals={2}
          decimal="."
          separator={" "}
          prefix={"R"}
        />
      </div>
    </div>
  );
};

export default BasketProduct;
