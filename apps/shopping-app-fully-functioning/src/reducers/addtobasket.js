const addToBasketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [...state, action.value];
    case "EMPTY_BASKET":
      return (state = []);
    case "REMOVE_FROM_BASKET":
      return;
    default:
      return state;
  }
};
export default addToBasketReducer;
