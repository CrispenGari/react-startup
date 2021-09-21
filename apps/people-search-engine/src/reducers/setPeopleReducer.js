import constants from "../utils";

const setPeopleReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_PEOPLE:
      return (state = action.value);
    default:
      return state;
  }
};

export default setPeopleReducer;
