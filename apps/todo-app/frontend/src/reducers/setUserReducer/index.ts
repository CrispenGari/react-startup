import constants from "../../utils";

const setUserReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case constants.SET_USER:
      return (state = action.payload);
    default:
      return state;
  }
};

export default setUserReducer;
