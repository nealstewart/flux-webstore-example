import React, { Component } from 'react';
import CartStore from "./CartStore";
import {Actions} from "./CartActions";
import Cart from "./Cart";
import './App.css';

const products = [
  {
    id: 1,
    name: "Paracetamol",
    price: 10.00
  },
  {
    id: 2,
    name: "Ibuprofen",
    price: 12.00
  },
  {
    id: 3,
    name: "Rubbing alcohol",
    price: 3.00
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
        <header>
          <h1>An Amazing Webstore</h1>
        </header>
        <main>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <button onClick={() => Actions.addToCart(product)}>
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
          <Cart items={CartStore.items} />
        </main>
      </div>
    );
  }
}

export default App;
