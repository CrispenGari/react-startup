import React from "react";
import { LocationOn } from "@material-ui/icons";
import "./Marker.css";
const Marker = ({ text }) => {
  return (
    <div className="marker">
      <p>{text}</p>
      <LocationOn />
    </div>
  );
};

export default Marker;
