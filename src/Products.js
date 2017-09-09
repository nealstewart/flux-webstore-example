import React from "react";
import {Actions} from "./CartActions";
import "./Products.css";

const Products = ({products}) => (
  <ul className="Products">
    {products.map(product => (
      <li key={product.id} className="Product">
        <h3>{product.name}</h3>
        <img src={product.imageUrl} />
        <button onClick={() => Actions.addToCart(product)}>
          Add to cart
        </button>
      </li>
    ))}
  </ul>
);

export default Products;
