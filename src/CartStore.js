import {Store} from "flux/utils";
import Dispatcher from "./Dispatcher";
import {ActionTypes} from "./CartActions";

class CartStore extends Store {
    constructor() {
        super(Dispatcher);
        this.items = [];
    }

    __onDispatch(payload) {
        switch (payload.type) {
            case ActionTypes.ADD_TO_CART: {
                const {product} = payload;
                const itemWithProduct = this.items.find(
                    item => item.product.id === product.id)

                if (itemWithProduct) {
                    return;
                }

                this.items.push({
                    product: product,
                    quantity: 1
                });

                this.__emitChange();

                return;
            }
        }
    }
}

export default new CartStore();
