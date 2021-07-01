import constants from "../../utils";

const setTodosReducer = (state: Array<any> = [], action: any) => {
  switch (action.type) {
    case constants.SET_TODO:
      return (state = action.payload);
    default:
      return state;
  }
};

export default setTodosReducer;
