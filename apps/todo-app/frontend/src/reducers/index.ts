import setUserReducer from "./setUserReducer";
import { combineReducers } from "redux";
import setTodosReducer from "./setTodosReducer";
const rootReducers = combineReducers({
  user: setUserReducer,
  todos: setTodosReducer,
});

export default rootReducers;
