import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import basketReducer from "./basketReducer";
import selectedTabReducer from "./selectedTabReducer";
import allProductsReducer from "./allProductsReducer";

const rootReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  users: usersReducer,
  basket: basketReducer,
  selectedTab: selectedTabReducer,
  allProducts: allProductsReducer,
});

export default rootReducers;
