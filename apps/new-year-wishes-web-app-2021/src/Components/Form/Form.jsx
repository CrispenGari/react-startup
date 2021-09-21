import React, { useState, useEffect } from "react";
import "./Form.css";
import constants from "../../utils";
import {
  LinearProgress,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
const Form = () => {
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(5);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalpoints, setTotalPoints] = useState(0);
  const [play, setPlay] = useState(!false);
  const submit = (event) => {
    event.preventDefault();
    setTimer(5);
    setPlay(true);
    setQuestionIndex(questionIndex + 1);
    const correct_answer = constants.QUESTIONS[questionIndex].correct;
    correct_answer === answer && setTotalPoints(totalpoints + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      play && setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setTimer, timer, play]);

  // restore the timer if it reaches 0
  timer === -1 && setTimer(5);
  timer === -1 && setQuestionIndex(questionIndex + 1);

  // restore the states to restart the game
  const replay = (e) => {
    e.preventDefault();
    setQuestionIndex(0);
    setTotalPoints(0);
    setTimer(0);
    setAnswer("");
  };
  const start = (e) => {
    e.preventDefault();
    setPlay(!play);
  };
  if (questionIndex + 1 < constants.QUESTIONS.length) {
    return (
      <form className="form">
        <div className="form__top">
          <h1>Answer some few questions if you know Crispen!</h1>
          <button className="form__button" onClick={start}>
            {play ? "Pause" : "Play"}
          </button>
        </div>
        <FormLabel component="legend">
          {constants.QUESTIONS[questionIndex]?.question}
        </FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        >
          <FormControlLabel
            value={constants.QUESTIONS[questionIndex]?.answer1}
            control={<Radio className="form__radiobtn" />}
            label={constants.QUESTIONS[questionIndex]?.answer1}
            className="form__answer"
          />
          <FormControlLabel
            value={constants.QUESTIONS[questionIndex]?.answer2}
            className="form__answer"
            control={<Radio className="form__radiobtn" />}
            label={constants.QUESTIONS[questionIndex]?.answer2}
          />
        </RadioGroup>
        <div className="form__buttons">
          <div></div>
          <button onClick={submit} className="form__button" type="submit">
            Submit
          </button>
        </div>
        <div className="form__progress">
          <small>Time Left</small>
          <LinearProgress
            className="form__progress__bar"
            variant="determinate"
            color={constants.COLORS[timer - 1]}
            value={(timer / 5) * 100}
          />
          <small>{`${timer}/5 s`}</small>
        </div>
        <div className="form__progress">
          <small>Question</small>
          <LinearProgress
            className="form__progress__bar"
            variant="determinate"
            value={((questionIndex + 1) / constants.QUESTIONS.length) * 100}
          />
          <small>
            {questionIndex + 1} / {constants.QUESTIONS.length}
          </small>
        </div>
        <div className="form__progress">
          <small>Total Points</small>
          <LinearProgress
            className="form__progress__bar"
            variant="determinate"
            value={(totalpoints / constants.QUESTIONS.length) * 100}
          />
          <small>
            {totalpoints} / {constants.QUESTIONS.length}
          </small>
        </div>
      </form>
    );
  } else {
    return (
      <div className="form__complete">
        <h1> Happy New Year!</h1>

        <h2>You know Crispen</h2>
        <h3>
          {`${Math.round((totalpoints / constants.QUESTIONS.length) * 100)} %`}{" "}
        </h3>
        <img src={constants.IMAGES[3]} alt="done--" />
        <small>
          "Wishing you a Happy New Year 2021, from our family to yours! Happy
          New Year to you and your family! I hope this year will bring warmth of
          love and positivity in your life." - Crispen Gari
        </small>
        <form className="form__buttons">
          <div></div>
          <button className="form__button" type="submit" onClick={replay}>
            Replay
          </button>
        </form>
      </div>
    );
  }
};

export default Form;
