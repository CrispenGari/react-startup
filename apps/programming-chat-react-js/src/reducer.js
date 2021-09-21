export const initialState = {
  user: null,
};

export const actionType = {
  SET_USER: "SET_USER",
};
const reducer = (state, action) => {
  switch (action.name) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
