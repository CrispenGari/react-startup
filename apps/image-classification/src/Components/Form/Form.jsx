import React, { useState, useRef, useEffect } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
const Form = ({ setClassifications, setException }) => {
  const [imageUrl, setImageURL] = useState("");
  const placeholder_image =
    "https://image.cnbcfm.com/api/v1/image/105828578-1554223245858gettyimages-149052633.jpeg";
  const imageRef = useRef(null);
  console.log(tf.ready());
  const classify = (event) => {
    event.preventDefault();
    imageUrl ? setImageURL(imageUrl) : setImageURL(placeholder_image);
  };

  useEffect(() => {
    if (imageUrl || placeholder_image) {
      (async () => {
        const network = await mobilenet.load({
          version: 1,
          alpha: 0.25 || 0.5 || 0.75 || 1.0,
        });
        if (
          typeof (imageRef.current !== undefined) &&
          imageRef.current !== null
        ) {
          const image = imageRef.current;
          const predictions = await network.classify(image);

          console.log(predictions);
          setClassifications(predictions);
        }
      })();
    } else {
      setException("You can not classify an image without an URL.");
    }
  }, [imageUrl, imageRef, setClassifications, placeholder_image, setException]);
  return (
    <form className="form">
      <h1>Image URL</h1>
      <textarea
        placeholder="paste or type a image URL here..."
        className="form__image__url"
        cols="30"
        rows="10"
        value={imageUrl}
        onChange={(e) => setImageURL(e.target.value)}
      ></textarea>
      <h1>Image Preview</h1>
      <img
        ref={imageRef}
        crossOrigin="anonymous"
        className="form__image"
        src={imageUrl ? imageUrl : placeholder_image}
        alt="classification"
      />
      <div className="form__controls"></div>
      <Button
        disabled={!imageUrl}
        type="submit"
        className="form__button"
        onClick={classify}
      >
        Classify
      </Button>
    </form>
  );
};
export default Form;
