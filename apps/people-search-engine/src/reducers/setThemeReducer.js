import constants from "../utils";

const setThemeReducer = (state = constants.THEMES[1], action) => {
  switch (action.type) {
    case constants.SET_THEME:
      return (state = action.value);
    default:
      return state;
  }
};

export default setThemeReducer;
