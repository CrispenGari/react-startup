import React, { useState } from "react";
import "./Main.css";
import { Form, Sentence } from "../../Components";
import { Loop } from "@material-ui/icons";
const Main = () => {
  const [predictions, setPredictions] = useState([]);
  return (
    <div className="main">
      <Form setPredictions={setPredictions} />

      {predictions.length > 0 ? (
        <div className="main__answers">
          {predictions.map((prediction, index) => {
            return (
              prediction?.text && (
                <Sentence key={index} prediction={prediction} />
              )
            );
          })}
        </div>
      ) : (
        <div className="main__loading">
          <Loop />
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Main;
