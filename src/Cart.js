import React, { Component } from 'react';
import {Actions} from "./CartActions";

class Cart extends Component {
  render() {
    const {items} = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td><button onClick={() => Actions.removeFromCart(item)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Cart;
