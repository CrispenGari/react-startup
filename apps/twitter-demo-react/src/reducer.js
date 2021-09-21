export const initialState = {
  userifo: null,
  user: null,
  posts: [],
};
const reducer = (state, action) => {
  // console.log(action);
  switch (action.name) {
    case "SET_USER_INFO":
      return {
        userinfo: action,
      };
      break;
    case "SET_USER":
      return {
        user: action,
      };
      break;
    case "SET_POSTS":
      return {
        ...state,
        posts: action,
      };
      break;
    default:
      return state;
  }
};
export default reducer;
