import constants from "../../constants";
interface Action {
  payload?: any;
  type: string;
}
type ActionType = Action;
const userReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_USER:
      return (state = action.payload);
    default:
      return state;
  }
};

export default userReducer;
