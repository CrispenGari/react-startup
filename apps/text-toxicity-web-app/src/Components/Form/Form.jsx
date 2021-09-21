import React, { useState } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import * as tf from "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";
import axios from "../../data";
const Form = ({ setPredictions }) => {
  const [paragraph, setParagraph] = useState("");
  const analyse = async (event) => {
    event.preventDefault();
    if (!tf.ready()) {
      return;
    }
    const threshold = 0.9;
    const network = await toxicity.load(threshold);
    /*
    in the text from a text area replace every ?, ! with full stops
    and convert to an array
    */
    const __replace_1 = String(paragraph).replace("?", ".");
    const __replace_2 = String(__replace_1).replace("!", ".");
    const sentences = __replace_2.trim().split(".");
    let response = [];
    for (let i = 0; i < sentences.length; i++) {
      const predictions = await network.classify(sentences[i]);
      const res = {
        text: sentences[i],
        predictions: predictions,
      };
      response.push(res);
      // push the history into the history database
      (async () => {
        let pred = [];
        for (let k = 0; k < res.predictions?.length; k++) {
          pred.push({
            label: res.predictions[k]?.label,
            ratting: res.predictions[k]?.results[0]?.probabilities[1],
            match: res.predictions[k]?.results[0]?.match,
          });
        }
        if (pred.length > 0) {
          await axios.post("/history", {
            sentence: res.text,
            predictions: pred,
          });
        }
      })();
    }
    if (response.length > 0) {
      return setPredictions(response);
    }
    return;
  };
  return (
    <form className="form">
      <h1>Paragraph</h1>
      <textarea
        placeholder="paste or type a paragraph here..."
        className="form__paragraph"
        cols="30"
        rows="10"
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
      ></textarea>

      <Button
        disabled={!paragraph}
        type="submit"
        className="form__button"
        onClick={analyse}
      >
        Analyse
      </Button>
    </form>
  );
};
export default Form;
/*
You Suck! But I love you. How are you today?

*/
