import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/Cart_Context";
import { NavLink, json } from "react-router-dom";
import axios from "axios";
import CartItemCard from "../components/CartItemCard";
import Data from "../assets/data/cart.json";
import Privacy from "../components/ProductDetails/Privacy";
import CheckoutCart from "../components/Spacification/CheckoutCart";
import Navbar from "../components/NavBar";

const Cart = () => {
  // const {addtoCart} = useCartContext()
  const { cart } = useCartContext();
  // const [hasPosted, setHasPosted] = useState(false);

  console.log("cart", cart);

  const data = Data;
  console.log("data", data);

  let id = cart.id;
  const color = cart.color;
  const amount = cart.amount;

  const checkout = (id, color, amount) => {
    return id, color, amount;
  };

  return (
    <div className="cart-main-container">
      <Navbar/>
      <div className="justify-contant-center">
        <h2 className="your-cart-section">your cart</h2>
        <hr />
        <div className="cart-in-which-found-the-all-item">
          {cart.map((i) => {
            // console.log("i", i)
            return <CartItemCard i={i} />;
          })}
        </div>
        <div className="privacy-cart-section">
          <Privacy />
        </div>
      </div>
      <div className="checkout-button">
        <NavLink to="/checkout-using-add-to-cart-noise-online">
          <button>checkout</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
