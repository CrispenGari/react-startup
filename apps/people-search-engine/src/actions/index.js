import constants from "../utils";

const changeTheme = (value) => {
  return {
    value: value,
    type: constants.SET_THEME,
  };
};

const setPeople = (value) => {
  return {
    value: value,
    type: constants.SET_PEOPLE,
  };
};
const actions = {
  changeTheme,
  setPeople
};

export default actions;
