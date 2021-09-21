import React, { useState, useEffect } from "react";
import "./Score.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import { Alert } from "@material-ui/lab";
const Score = () => {
  const [newScore, setNewScore] = useState(false);
  const score = useSelector((state) => state.scores);
  const highScore = useSelector((state) => state.highScore);
  const lastScore = useSelector((state) => state.lastScore);
  const dispatch = useDispatch();
  const replay = () => {
    dispatch(
      actions.setLastScore(
        score?.reduce((a, b) => {
          return a + b;
        })
      )
    );
    dispatch(actions.restoreScore());
  };
  lastScore > highScore && dispatch(actions.setHighScore(lastScore));
  useEffect(() => {
    if (score.length) {
      if (
        score?.reduce((a, b) => {
          return a + b;
        }) > highScore
      ) {
        setNewScore(true);

        const outId = setTimeout(() => {
          setNewScore(false);
        }, 2000);
        return () => {
          clearTimeout(outId);
        };
      }
    }
  }, [score, setNewScore, highScore]);

  return (
    <div className="score">
      {newScore && (
        <Alert severity="success">Congratulations You Have A New Score!!</Alert>
      )}
      <h1>Your Scores</h1>
      <div className="score__row">
        <small>Chances</small>
        <small>{score?.length}/10</small>
      </div>
      <div className="score__row">
        <small>Current Score</small>
        <small>
          {score?.length === 0
            ? 0
            : isNaN(
                score?.reduce((a, b) => {
                  return a + b;
                })
              )
            ? 0
            : score?.reduce((a, b) => {
                return a + b;
              })}
        </small>
      </div>
      <div className="score__row">
        <small>Last Score</small>
        <small>{lastScore}</small>
      </div>
      <div className="score__row">
        <small>Highest Score</small>
        <small>{highScore}</small>
      </div>
      <div className="score__row">
        <button
          disabled={score?.length !== 10}
          className="score__button"
          onClick={replay}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default Score;
