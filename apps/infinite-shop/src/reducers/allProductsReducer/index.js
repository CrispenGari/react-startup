import constants from "../../utils/constants";

const allProductsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_ALL_PRODUCTS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default allProductsReducer;
