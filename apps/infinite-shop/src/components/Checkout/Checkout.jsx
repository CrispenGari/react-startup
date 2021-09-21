import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { GiOverInfinity } from "react-icons/gi";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CountUp from "react-countup";
import actions from "../../actions";

const Checkout = () => {
  const history = useHistory();

  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const clearBasket = () => {
    console.log(8);
    dispatch(actions.setBasket([]));
  };

  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const groupBy = (items, key) =>
    items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {}
    );
  useEffect(() => {
    setCheckoutProducts([]);
    const groupedProducts = groupBy(basket, "description");
    let keys = new Set(Object.keys(groupedProducts));
    keys.forEach((key) => {
      const productGroup = groupedProducts[key];
      let _price = 0;
      productGroup?.forEach((product) => {
        _price += product?.price;
      });
      const __groupedProducts = {
        description: key,
        price: _price,
        qnty: productGroup?.length,
      };

      setCheckoutProducts((oldProducts) => [...oldProducts, __groupedProducts]);
    });
  }, [basket]);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="header__left" onClick={() => history.replace("/")}>
          <GiOverInfinity className="header__left__icon" />
          <h1>Shops</h1>
        </div>
        <h1>Checkout</h1>
        <p></p>
      </div>
      {basket?.length ? (
        <div className="checkout__right">
          <p>
            <span>Product Name</span>
            <span>Quantity</span>
            <span>Total</span>
          </p>
          {checkoutProducts?.map((checkoutGroup, index) => {
            return (
              <p key={index}>
                <span>{checkoutGroup?.description}</span>
                <span className="checkout__price__countUp">
                  {checkoutGroup?.qnty}
                </span>
                <CountUp
                  className="checkout__price__countUp"
                  start={0}
                  end={checkoutGroup?.price}
                  duration={2.75}
                  decimals={2}
                  decimal="."
                  separator={" "}
                  prefix={"R"}
                />
              </p>
            );
          })}

          <p>
            <span>Checkout</span>
            <span>{basket.length}</span>
            <span>
              {
                <CountUp
                  className="basketcontainer__price__countUp"
                  start={0}
                  end={basket?.reduce((a, b) => a + b.price, 0)}
                  duration={2.75}
                  decimals={2}
                  decimal="."
                  separator={" "}
                  prefix={"R"}
                />
              }
            </span>
          </p>
          <div className="checkout__controls">
            <button>Pay</button>
            <button
              onClick={async () => {
                await history.push("/");
                await document.querySelector(".products").scrollIntoView();
              }}
            >
              Add more
            </button>
            <button onClick={clearBasket}>Clear all</button>
          </div>
        </div>
      ) : (
        <div className="checkout__right--no-products">
          Hey {String(user?.displayName).split(/\s/)[0]}, there's nothing to
          checkout please add products to your basket.
          <button
            onClick={async () => {
              await history.push("/");
              await document.querySelector(".products").scrollIntoView();
            }}
          >
            Add now
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
