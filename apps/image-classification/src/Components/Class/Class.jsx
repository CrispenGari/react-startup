import React from "react";
import "./Class.css";
import { Done } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
const Class = ({ classification }) => {
  return (
    <div className="class">
      <h1>{classification?.className}</h1>
      <div className="class__body">
        <p>Detected</p>
        <Done />
      </div>
      <Rating
        className="class__rating"
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
        value={Math.round(classification?.probability * 50, 2)}
      />
    </div>
  );
};
export default Class;
