import React, { useEffect, useState } from "react";

import { Item } from "../../Components";
import axios from "../../products/axios/axios";
import "./New.css";
function New() {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data_ = await axios.get("/v1/product/new products");
      setNewProducts(data_.data);
    };

    fetchData();
  }, []);
  return (
    <div className="new">
      <h2>
        <span>New Items</span>
        <span>
          <small>{new Date().toUTCString()}</small>
        </span>
      </h2>
      {newProducts.map((iterm, index) => (
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

export default New;
