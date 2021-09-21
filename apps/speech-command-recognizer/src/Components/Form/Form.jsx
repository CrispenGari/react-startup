import React, { useState } from "react";
import "./Form.css";
import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
import { FormControlLabel, Switch, IconButton } from "@material-ui/core";
import { Mic, MicOff, SettingsVoice, Warning } from "@material-ui/icons";

import wordList from "../../utils";
const Form = () => {
  const [listening, setListening] = useState(false);
  const [checked, setChecked] = useState(false);
  const [detectedWord, setDetectedWord] = useState("");
  let words;
  const record = (event) => {
    event.preventDefault();
    console.log(tf.ready());
    const recognizer = speechCommands.create("BROWSER_FFT");
    setListening(true);
    (async () => {
      await recognizer.ensureModelLoaded();
      words = recognizer.wordLabels();
      await recognizer.listen(
        ({ scores }) => {
          // console.log(scores);
          scores = Array.from(scores).map((s, i) => ({
            score: s,
            word: words[i],
          }));
          scores.sort((s1, s2) => s2.score - s1.score);
          setDetectedWord(scores[0]);
        },
        {
          includeSpectrogram: true,
          probabilityThreshold: 0.75,
        }
      );
      // Stop the recognition in 30 seconds and restore settings
      setTimeout(() => {
        recognizer.stopListening();
        setChecked(false);
        setListening(false);
        setDetectedWord("");
      }, 30000);
    })();
  };
  return (
    <form className="form">
      <div className="form__top">
        <h1>Available Words</h1>
        <FormControlLabel
          className="form__switch__label"
          control={
            <Switch
              className="form__switch"
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              name="checkedA"
            />
          }
          label={checked ? "MIC ON" : "MIC OFF"}
        />
      </div>
      <div className="form__available__words">
        {wordList.map((word, index) => {
          return (
            <div
              key={index}
              className={`form__available__word ${
                word === detectedWord?.word && "form__available__word--active"
              }`}
            >
              {word === wordList[wordList.length - 2] ? "_NOISE_" : word}
            </div>
          );
        })}
      </div>
      <div
        className={`form__helper ${
          !listening && "form__helper--not-listening"
        }`}
      >
        {listening ? (
          <React.Fragment>
            <SettingsVoice />
            <small>listening...</small>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              Switch on the MIC, click the listen button and try to say a word
              to start detecting words.
            </p>
            <small className="form__warning">
              <Warning />
              Note that the words that are detected are the ones that are on the
              above rectangle.
            </small>
          </React.Fragment>
        )}
      </div>
      <div className="form__controls">
        <div></div>
        <IconButton
          disabled={!checked}
          title="Record"
          onClick={record}
          className="form__button"
          type="submit"
        >
          {checked ? (
            <Mic className="form__mic--active" />
          ) : (
            <MicOff className="form__mic--disabled" />
          )}
        </IconButton>
        <div></div>
      </div>
    </form>
  );
};
export default Form;
