import React, { Component } from 'react';
import CartStore from "./CartStore";
import {Actions} from "./CartActions";
import Cart from "./Cart";
import './App.css';

const products = [
  {
    id: 1,
    name: "Paracetamol"
  },
  {
    id: 2,
    name: "Ibuprofen"
  },
  {
    id: 3,
    name: "Rubbing alcohol"
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.forceUpdate = this.forceUpdate.bind(this);

    CartStore.addListener(this.forceUpdate);
  }

  componentWillUnmount() {
    CartStore.removeListener(this.forceUpdate);
  }

  render() {
    return (
      <div>
        <header>An Amazing Webstore</header>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <button onClick={() => Actions.addTodo(product)}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
        <Cart items={CartStore.items} />
      </div>
    );
  }
}

export default App;
