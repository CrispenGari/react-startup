import authReducer from "./authentication";
import addToBasketReducer from "./addtobasket";
import totalReducer from "./addtobasket";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  authentication: authReducer,
  addtobasket: addToBasketReducer,
  totalamount: totalReducer,
});

export default rootReducers;
