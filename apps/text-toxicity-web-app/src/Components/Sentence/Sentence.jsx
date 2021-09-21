import React from "react";
import "./Sentence.css";
import { Toxicity } from "../../Components";
const Sentence = ({ prediction }) => {
  return (
    <div className="sentence">
      <h1>{prediction?.text}</h1>
      {prediction?.predictions?.map((prediction, index) => {
        return <Toxicity key={index} prediction={prediction} />;
      })}
    </div>
  );
};

export default Sentence;
