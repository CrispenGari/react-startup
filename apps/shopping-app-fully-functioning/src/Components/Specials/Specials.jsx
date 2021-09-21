import React, { useEffect, useState } from "react";
import "./Specials.css";
import { Item } from "../../Components";

import axios from "../../products/axios/axios";

function Specials() {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const _ = await axios.get("/v1/product/specials");
      setSpecials(_.data);
    };

    fetchData();
  }, []);

  console.log(specials);
  return (
    <div className="specials">
      <h2>
        <span>Today's Specials</span>
        <span>
          <small>{new Date().toUTCString()}</small>
        </span>
      </h2>
      {specials.map((iterm, index) => (
        <Item
          long
          src={iterm?.product_image}
          price={iterm?.product_price}
          key={index}
          product_id={iterm?._id}
          title={iterm?.product_name}
          rating={Number.parseInt(iterm?.product_rating) || 0}
        />
      ))}
    </div>
  );
}

export default Specials;
