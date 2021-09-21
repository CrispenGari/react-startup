import constants from "../utils/constants";

const setUser = (payload) => {
  return {
    type: constants.SET_USER,
    payload,
  };
};
const setUsers = (payload) => {
  return {
    type: constants.SET_USERS,
    payload,
  };
};
const setBasket = (payload) => {
  return {
    type: payload?.length !== 0 ? constants.SET_BASKET : constants.CLEAR_BASKET,
    payload,
  };
};
const setProducts = (payload) => {
  return {
    type: constants.SET_PRODUCTS,
    payload,
  };
};
const setAllProducts = (payload) => {
  return {
    type: constants.SET_ALL_PRODUCTS,
    payload,
  };
};
const setSelectedTab = (payload) => {
  return {
    type: constants.SET_SELECTED_TAB,
    payload,
  };
};

const actions = {
  setBasket,
  setUser,
  setUsers,
  setProducts,
  setSelectedTab,
  setAllProducts,
};
export default actions;
