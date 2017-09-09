import React, { Component } from 'react';
import CartStore from "./CartStore";
import {Route, Link} from 'react-router-dom';
import Cart from "./Cart";
import Products from "./Products";
import './App.css';

const products = [
  {
    id: 1,
    name: "Paracetamol",
    price: 10.00,
    imageUrl: "/products/nitrophenol-867289_640.png"
  },
  {
    id: 2,
    name: "Ibuprofen",
    price: 12.00,
    imageUrl: "/products/painkillers-2525087_640.jpg"
  },
  {
    id: 3,
    name: "Rubbing alcohol",
    price: 3.00,
    imageUrl: "/products/ethanol-1094992_640.png"
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
          <Route exact path="/" component={() =>
            <Link to="/cart">View cart ({CartStore.items.length})</Link>} />
          <Route path="/cart" component={() =>
            <Link to="/">Back to Products</Link>} />
        </header>
        <main>
          <Route exact path="/" component={() =>
            <Products products={products} />
          } />
          <Route path="/cart" component={() =>
            <Cart items={CartStore.items}/>
          } />
        </main>
      </div>
    );
  }
}

export default App;
