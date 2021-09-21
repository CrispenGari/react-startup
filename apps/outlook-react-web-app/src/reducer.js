export const initialState = {
  user: null,
};

export const actionName = {
  SET_USER: "SET_USER",
};
const reducer = (state, action) => {
  switch (action.name) {
    case actionName.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
