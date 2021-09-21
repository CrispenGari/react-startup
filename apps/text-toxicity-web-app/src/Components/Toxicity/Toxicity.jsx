import React from "react";
import "./Toxicity.css";
import { Done } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
const Toxicity = ({ prediction }) => {
  return (
    <div className="toxicity">
      <h1>{prediction?.label}</h1>
      <div className="toxicity__body">
        <p>{String(prediction?.results[0]?.match)}</p>
        <Done />
      </div>
      <Rating
        className="toxicity__rating"
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
        value={Math.round(
          prediction?.results[0]?.probabilities[
            prediction?.results[0]?.probabilities?.length - 1
          ] * 5
        )}
      />
    </div>
  );
};
export default Toxicity;
