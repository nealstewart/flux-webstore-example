import React from 'react';
import {Actions} from "./CartActions";
import "./Cart.css";

const calcTotal = items =>
  items.reduce(
    (runningTotal, item) => runningTotal + item.product.price * item.quantity,
    0);

const CartItem = ({item}) => (
  <tr>
    <td>{item.product.name}</td>
    <td><img src={item.product.imageUrl} /></td>
    <td>{item.quantity}</td>
    <td>{item.product.price}</td>
    <td>{item.quantity * item.product.price}</td>
    <td><button onClick={() => Actions.removeFromCart(item)}>X</button></td>
  </tr>
);

const Cart = ({items}) => (
  <div className="Cart">
    <header>
      <h2>Your Shopping Cart</h2>
    </header>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td />
          <td>Quantity</td>
          <td>Unit Price</td>
          <td>Line Total</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <CartItem key={i} item={item} />
        ))}
        <tr />
        <tr>
          <td />
          <td />
          <td />
          <td><strong>Total Price</strong></td>
          <td>{calcTotal(items)}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Cart;
