import constants from "../../constants";
interface Action {
  payload?: any;
  type: string;
}
type ActionType = Action;
const counterReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case constants.INCREMENT:
      return state + action.payload;
    case constants.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
