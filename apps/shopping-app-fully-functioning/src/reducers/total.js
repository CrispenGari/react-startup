const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TOTAL":
      return action.value;
    default:
      return state;
  }
};

export default totalReducer;
