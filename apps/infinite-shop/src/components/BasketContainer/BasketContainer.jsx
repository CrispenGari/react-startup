import React, { useState, useEffect } from "react";
import "./BasketContainer.css";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { BasketProduct } from "../../components";
import { useHistory } from "react-router";
const BasketContainer = () => {
  const basket = useSelector((state) => state.basket);
  const history = useHistory();
  const [checkoutProducts, setCheckoutProducts] = useState([]);

  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);

  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

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
        price: productGroup[0]?.price,
        qnty: productGroup?.length,
        image: productGroup[0]?.image,
        seller: productGroup[0]?.seller,
        previousPrice: productGroup[0]?.previousPrice,
        isBestSeller: productGroup[0]?.isBestSeller,
        isOnSale: productGroup[0]?.isOnSale,
        ratings: productGroup[0]?.ratings,
        hardcover: productGroup[0]?.hardcover,
        author: productGroup[0]?.author,
        totalPrice: _price,
      };

      setCheckoutProducts((oldProducts) => [...oldProducts, __groupedProducts]);
    });
  }, [basket]);
  useEffect(() => {
    const date = new Date();
    const intervalId = setInterval(() => {
      const m = date.getMinutes();

      const h = date.getHours();
      setMin(m);

      setHrs(h);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const date = new Date();
    const date_ = date.getDate();
    const day = date.getDay();
    const year = date.getFullYear();
    const month = date.getMonth();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setYear(year);
    setDay(days[day]);
    setDate(date_);
    setMonth(months[month]);
  }, []);

  return (
    <div className="basketcontainer">
      <div className="basketcontainer__header">
        <h1>Your Basket</h1>
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
      </div>

      <div className="basketcontainer__products">
        {checkoutProducts.map((product, i) => {
          return <BasketProduct key={i} product={product} />;
        })}
      </div>
      {checkoutProducts?.length === 0 && (
        <div className="basketcontainer__products--empty">
          <h1>There are no products in your basket!</h1>

          <div className="notification__time">
            <h1>
              {String(hrs).length === 2 ? hrs : `0${hrs}`}:
              {String(min).length === 2 ? min : `0${min}`}
            </h1>
            <p>
              {day} {String(date).length === 2 ? date : `0${date}`} {month}{" "}
              {year}
            </p>
          </div>

          <button
            onClick={async () => {
              await history.push("/");
              await document.querySelector(".products").scrollIntoView();
            }}
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};

export default BasketContainer;
