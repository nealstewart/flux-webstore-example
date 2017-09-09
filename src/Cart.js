import React, { Component } from 'react';
import {Actions} from "./CartActions";

class Cart extends Component {
  render() {
    const {items} = this.props;

    const total = items.reduce(
      (runningTotal, item) => runningTotal + item.product.price * item.quantity,
      0);

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Unit Price</td>
            <td>Line Total</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity * item.product.price}</td>
              <td><button onClick={() => Actions.removeFromCart(item)}>X</button></td>
            </tr>
          ))}
          <tr />
          <tr>
            <td />
            <td />
            <td>Total Price</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Cart;
