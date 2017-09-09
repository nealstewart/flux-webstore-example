import Dispatcher from "./Dispatcher";

export const ActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};

export const Actions = {
  addToCart(product) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_TO_CART,
      product,
    });
  },

  removeFromCart(item) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      item,
    });
  }
};
