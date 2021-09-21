import constants from "../../utils/constants";

const selectedTabReducer = (state = "all products", action) => {
  switch (action.type) {
    case constants.SET_SELECTED_TAB:
      return (state = action.payload);
    default:
      return state;
  }
};
export default selectedTabReducer;
