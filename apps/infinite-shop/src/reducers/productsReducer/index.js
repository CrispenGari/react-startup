import constants from "../../utils/constants";
const productReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_PRODUCTS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default productReducer;
