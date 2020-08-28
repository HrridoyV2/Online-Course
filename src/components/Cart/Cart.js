import React, { useState, useEffect, reduce } from 'react';
import './Cart.css';

function Cart(props) {
  const cart = props.cart;
  const total = cart.reduce((total, crs) => total + crs.price, 0);
  return (
    <div>
      <header>
    <div className="cart">
        <p>Items Ordered: <span className="items">{props.cart.length}</span></p>
  <p className="ml-auto">Total Price: <span className="price">${total}</span></p>
    </div>
      </header>
    </div>
  );
} 



export default Cart;
