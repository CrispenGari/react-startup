import constants from "../../utils/constants";

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_BASKET:
      let exists = false;

      state.forEach((product) => {
        if (product?.description === action.payload[0].description) {
          exists = true;
        }
      });

      if (exists) {
        const currentState = state.filter((prod) => {
          return prod?.description !== action.payload[0].description;
        });
        return (state = [...currentState, ...action.payload]);
      } else {
        return (state = [...state, ...action.payload]);
      }
    case constants.CLEAR_BASKET:
      return (state = []);
    default:
      return state;
  }
};

export default basketReducer;
