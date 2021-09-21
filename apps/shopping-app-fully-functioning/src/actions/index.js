const addToBasket = (value) => {
  return {
    type: "ADD_TO_BASKET",
    value: value,
  };
};
const removeFromBasket = (value) => {
  return {
    type: "ADD_TO_BASKET",
    value: value,
  };
};
const setUser = (value) => {
  return {
    type: "SET_USER",
    value: value,
  };
};

const reduceTotal = (value) => {
  return {
    type: "REDUCE_TOTAL",
    value: value,
  };
};
const emptyBasket = () => {
  return {
    type: "EMPTY_BASKET",
  };
};
const addTotal = (value) => {
  return {
    type: "ADD_TOTAL",
    value: value,
  };
};

export {
  setUser,
  addToBasket,
  removeFromBasket,
  addTotal,
  reduceTotal,
  emptyBasket,
};
