import React from "react";
import "./Main.css";
import { Line } from "../../Components";
const Main = ({ lines, textType, setTextType }) => {
  return (
    <div className="main">
      {lines.map((line, index) => (
        <Line
          number={index}
          key={index}
          setTextType={setTextType}
          textType={textType}
        />
      ))}
    </div>
  );
};

export default Main;
