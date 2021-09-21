import React, { useState } from "react";
import "./Form.css";
import { Button } from "@material-ui/core";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
const Form = ({ setAnswers, setException }) => {
  const [questionText, setQuestionText] = useState("");
  const [paragraph, setParagraph] = useState("");

  console.log(process.cwd());
  const answer = (event) => {
    event.preventDefault();
    if (questionText) {
      (async () => {
        const network = await qna.load({
          modelUrl: "http://localhost:3001/model.json",
        });
        /*{
          modelUrl:
            "https://raw.githubusercontent.com/CrispenGari/question-and-answer-web-app/main/src/model.json",
        }

        */
        console.log(network);
        const answers = await network.findAnswers(questionText, paragraph);
        console.log(answers);
        setAnswers(answers);
      })();
    } else {
      setException("Opps! No question to be answered. Please ask a question!!");
    }
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

      <h1>Question</h1>
      <textarea
        placeholder="type a question here..."
        className="form__question"
        cols="30"
        rows="10"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      ></textarea>

      <Button
        disabled={!paragraph}
        type="submit"
        className="form__button"
        onClick={answer}
      >
        Ask
      </Button>
    </form>
  );
};
export default Form;
