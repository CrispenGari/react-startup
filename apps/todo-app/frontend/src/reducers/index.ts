import setUserReducer from "./setUserReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  user: setUserReducer,
});

export default rootReducers;
