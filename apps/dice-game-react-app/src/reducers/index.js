import { combineReducers } from "redux";
import lastScoreReducer from "./lastScoreReducer";
import highScoreReducer from "./highScoreReducer";
import scoresReducer from "./scoresReducer";
import themeReducer from "./themeReducer";

const rootReducers = combineReducers({
  scores: scoresReducer,
  theme: themeReducer,
  highScore: highScoreReducer,
  lastScore: lastScoreReducer,
});

export default rootReducers;
