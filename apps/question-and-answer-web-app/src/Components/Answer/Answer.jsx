import React from "react";
import "./Answer.css";
import { Done } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
const Answer = () => {
  return (
    <div className="answer">
      <h1>Question</h1>
      <div className="answer__body">
        <p>Im the solution</p>
        <Done />
      </div>
      <Rating
        className="answer__rating"
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </div>
  );
};
export default Answer;
