import constants from "../utils";
const setScore = (value) => {
  return {
    value: value,
    type: constants.SET_SCORE,
  };
};
const restoreScore = () => {
  return {
    type: constants.RESTORE_SCORE,
  };
};
const setHighScore = (value) => {
  return {
    type: constants.HIGH_SCORE,
    value: value,
  };
};
const setLastScore = (value) => {
  return {
    type: constants.LAST_SCORE,
    value: value,
  };
};
const setTheme = (value) => {
  return {
    value: value,
    type: constants.SET_THEME,
  };
};
const actions = {
  setScore,
  setTheme,
  restoreScore,
  setLastScore,
  setHighScore,
};

export default actions;
