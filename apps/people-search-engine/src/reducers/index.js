import { combineReducers } from "redux";
import setPeopleReducer from "./setPeopleReducer";
import setThemeReducer from "./setThemeReducer";

const rootReducers = combineReducers({
  people: setPeopleReducer,
  theme: setThemeReducer,
});

export default rootReducers;
