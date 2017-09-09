import Dispatcher from "./Dispatcher";

export const ActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART'
};

export const Actions = {
  addTodo(product) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_TO_CART,
      product,
    });
  },
};
