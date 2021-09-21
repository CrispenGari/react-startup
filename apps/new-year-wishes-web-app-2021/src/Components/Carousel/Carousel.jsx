import React, { useState, useEffect } from "react";
import "./Carousel.css";
import constants from "../../utils";
const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(
        (imageIndex - 1 + constants.IMAGES.length) % constants.IMAGES.length
      );
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);
  return (
    <div className="carousel">
      <img src={constants?.IMAGES[imageIndex]} alt="2021-new-year" />
    </div>
  );
};
export default Carousel;
