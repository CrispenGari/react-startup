export const initialState = {
  user: null,
  userId: null,
};

export const actionType = {
  SET_USER: "SET_USER",
  SET_USERID: "SET_USERID",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.name) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_USERID:
      return {
        ...state,
        userId: action.userId,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
