export const initialState = {
  basket: [],
  user: null,
};

// this one is called a selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "ADD_TO_BASKET":
      // logic of adding to basket
      return {
        ...state, // return whatever the state was and the new added item in the state,
        basket: [...state.basket, action.item], // update the basket
      };
      break;
    case "REMOVE_FROM_BASKET":
      // logic of removing to basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //remove item from basket
        newBasket.splice(index, 1);
      } else {
        console.error(
          `Can't remove the item of id ${action.id} because it does't exist in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      break;
    default:
      return state;
  }
};
export default reducer;
/*

*/
