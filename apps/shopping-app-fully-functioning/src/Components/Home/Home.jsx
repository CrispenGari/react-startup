import React, { useState, useEffect } from "react";
import "./Home.css";
import Item from "../Item/Item";

import axios from "../../products/axios/axios";
function Home() {
  const [topRated, setTopRated] = useState([]);
  const [recommented, setRecommented] = useState([]);
  const [highlyDemanded, setHighlyDemanded] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [oldProducts, setOldProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/v1/product/top rated");
      const data_ = await axios.get("/v1/product/new products");
      const data__ = await axios.get("/v1/product/old products");
      const data___ = await axios.get("/v1/product/recomented");
      const _data__ = await axios.get("/v1/product/highly demanded");
      const _data_ = await axios.get("/v1/product/specials");
      setNewProducts(data_.data);
      setTopRated(data.data);
      setOldProducts(data__.data);
      setRecommented(data___.data);
      setHighlyDemanded(_data__.data);
      setSpecials(_data_.data);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div className="home__row">
        <h1>Top Rated</h1>
        <div className="home__row--items">
          {topRated.map((iterm, index) => (
            <Item
              src={iterm?.product_image}
              price={iterm?.product_price}
              key={index}
              product_id={iterm?._id}
              title={iterm?.product_name}
              rating={Number.parseInt(iterm?.product_rating) || 0}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="home__row">
        <h1>Recommented</h1>
        <div className="home__row--items">
          {recommented.map((iterm, index) => (
            <Item
              src={iterm?.product_image}
              price={iterm?.product_price}
              key={iterm}
              product_id={iterm?._id}
              title={iterm?.product_name}
              rating={Number.parseInt(iterm?.product_rating) || 0}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="home__row">
        <h1>Highly Demanded</h1>
        <div className="home__row--items">
          {highlyDemanded.map((iterm, index) => (
            <Item
              src={iterm?.product_image}
              price={iterm?.product_price}
              key={iterm}
              product_id={iterm?._id}
              title={iterm?.product_name}
              rating={Number.parseInt(iterm?.product_rating) || 0}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="home__row">
        <h1>Specials</h1>
        <div className="home__row--items">
          {specials.map((iterm, index) => (
            <Item
              src={iterm?.product_image}
              price={iterm?.product_price}
              key={iterm}
              product_id={iterm?._id}
              title={iterm?.product_name}
              rating={Number.parseInt(iterm?.product_rating) || 0}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="home__row">
        <h1>New Products</h1>
        <div className="home__row--items">
          {newProducts.map((iterm, index) => (
            <Item
              src={iterm?.product_image}
              price={iterm?.product_price}
              key={iterm}
              product_id={iterm?._id}
              title={iterm?.product_name}
              rating={Number.parseInt(iterm?.product_rating) || 0}
              index={index}
            />
          ))}{" "}
        </div>
      </div>
      <div className="home__row">
        <h1>Old Products</h1>
        <div className="home__row--items">
          {oldProducts.map((iterm, index) => (
            <Item
              src={iterm?.product_image}
              price={iterm?.product_price}
              key={iterm}
              product_id={iterm?._id}
              title={iterm?.product_name}
              rating={Number.parseInt(iterm?.product_rating) || 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
