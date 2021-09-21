export const initialState = {
  userinfo: null,
  user: null,
};

const reducer = (state, action) => {
  switch (action.name) {
    case "SET_INFO":
      return {
        ...state,
        userinfo: action.userinfo,
      };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
