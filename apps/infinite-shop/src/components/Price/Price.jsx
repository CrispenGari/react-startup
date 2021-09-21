import React from "react";
import "./Price.css";
import CountUp from "react-countup";
const Price = ({ previousPrice, price, delivery }) => {
  return (
    <div className="price">
      <div className="actual__price">
        <p>R</p>
        <CountUp
          className="actual__price__countUp"
          start={0}
          end={Number.parseInt(String(price).split(".")[0])}
          duration={2.75}
        />
        <p>{String(String(price).split(".")[1]).slice(0, 2)}</p>
      </div>
      <p>R {previousPrice}</p>
      <p> + R {delivery} shipping</p>
    </div>
  );
};

export default Price;
