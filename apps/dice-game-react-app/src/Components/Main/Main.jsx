import React, { useState } from "react";
import "./Main.css";
import { Face } from "../../Components";
import actions from "../../actions";
import { Alert } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
const Main = () => {
  const [animation, setAnimation] = useState(false);
  const [number, setNumber] = useState(1);
  const [diced, setDiced] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [bonusPoints, setBonusPoints] = useState(0);
  const score = useSelector((state) => state.scores);

  const dispatch = useDispatch();

  const flip = () => {
    setAnimation(true);
    setDiced(!false);
    setNumber((Math.round(Math.random() * 10) % 6) + 1);
    setTimeout(() => {
      setAnimation(false);
      if (diced) {
        if (number === 6) {
          setBonus(true);
          setBonusPoints(10);
          dispatch(actions.setScore(number + 10));
          setTimeout(() => {
            setBonus(false);
          }, 1500);
        } else if (number === 5) {
          setBonus(true);
          setBonusPoints(5);
          dispatch(actions.setScore(number + 5));
          setTimeout(() => {
            setBonus(false);
          }, 1500);
        } else if (number === 4) {
          setBonus(true);
          setBonusPoints(2);
          dispatch(actions.setScore(number + 2));
          setTimeout(() => {
            setBonus(false);
          }, 1500);
        } else {
          dispatch(actions.setScore(number + 0));
        }
      }
    }, 1500);
  };
  return (
    <div className="main">
      {bonus && (
        <Alert severity="success">
          Wow, You have earned bonus points!! <b>+{bonusPoints}</b>
        </Alert>
      )}
      {score?.length === 10 ? (
        <Alert variant="outlined" severity="info" className="main__alert">
          Game Over
        </Alert>
      ) : (
        <Face number={number} animation={animation} />
      )}

      <button
        className="main__button"
        onClick={flip}
        disabled={score?.length > 9}
      >
        Flip
      </button>
    </div>
  );
};

export default Main;
