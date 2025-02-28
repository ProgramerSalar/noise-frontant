import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/Cart_Context";
import { NavLink, json } from "react-router-dom";
import axios from "axios";
import CartItemCard from "../components/CartItemCard";
import Data from "../assets/data/cart.json";
import Privacy from "../components/ProductDetails/Privacy";
import CheckoutCart from "../components/Spacification/CheckoutCart";
import Navbar from "../components/NavBar";
import { useCheckoutContext } from "../context/checkout_context";

const Cart = () => {
  // const {addtoCart} = useCartContext()
  const { cart, clearCart, total_price } = useCartContext();
  // const [hasPosted, setHasPosted] = useState(false);
  const { checkoutHandler } = useCheckoutContext();

  // console.log("cart", cart);

  const id = cart.map((item) => item.id);
  // console.log("ids", ids[0])

  // const my_list = ["1Pitch_Black1"];
  // const my_list = ids;
  // const desired_output = my_list[0].replace(/[\\[\\]']+/g, "");
  // // const id = desired_output.slice(1, -1);
  // const id = desired_output

  return (
    <div className="cart-main-container">
      <Navbar />
      <div className="justify-contant-center">
      <h2 className="your-cart-section">your cart</h2>
      <hr />
        {cart.length === 0 ? (
          <div className="cart-has-no-item">
            <h2>You have not added any item to your car</h2>
            <NavLink to="/hot-selling-product-collection">
              <button>Shop now</button>
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="cart-in-which-found-the-all-item">
            
              {cart.map((i) => {
                console.log("i", i);
                return <CartItemCard key={i.id} {...i} />;
              })}
            </div>
            <div className="privacy-cart-section">
              <Privacy />
            </div>
            <div className="checkout-button">
              <NavLink
                to="/checkout-using-add-to-cart-noise-online"
                onClick={() => checkoutHandler(id, total_price)}
              >
                <button>checkout</button>
              </NavLink>
              <div className="clear-cart">
                <button onClick={clearCart}>clear cart</button>
              </div>
              <div className="total-price">
                <p>{total_price}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
