import { useSelector } from "react-redux";
const emptyBasket = (state = [], action) => {
  switch (action.state) {
    case "EMPTY_BASKET":
      return (state = []);
    default:
      return state;
  }
};

export default emptyBasket;
