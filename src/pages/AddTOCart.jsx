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
  const { cart, clearCart, total_price } = useCartContext();
  // const [hasPosted, setHasPosted] = useState(false);

  console.log("cart", cart);


  


 

  return (
    <div className="cart-main-container">
      <Navbar/>
      <div className="justify-contant-center">
        <h2 className="your-cart-section">your cart</h2>
        <hr />
        <div className="cart-in-which-found-the-all-item">
          {cart.map((i) => {
            console.log("i", i)
            return <CartItemCard key={i.id} {...i} />;
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
      <div className="clear-cart">
        <button onClick={clearCart}>clear cart</button>
      </div>
      <div className="total-price">
        <p>{total_price}</p>
      </div>

    </div>
  );
};

export default Cart;
