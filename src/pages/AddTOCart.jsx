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
  console.log("tootalPrice", total_price);
  // const [hasPosted, setHasPosted] = useState(false);
  const { checkoutHandler } = useCheckoutContext();

  console.log("cart", cart);

  // const menu_data =  total_price === NaN ? "null" : "not null"
  // console.log(menu_data)
  const id = cart.map((item) => item.id);

  // const menu_data = isNaN(total_price) ? "null" : "not null";

  // console.log("menudata", menu_data);

  useEffect(() => {
    if (isNaN(total_price)) {
      clearCart();
    }
  }, [total_price]);

  return (
    <div className="cart-main-container">
      <Navbar />
      <div className="justify-contant-center">
        <h2 className="your-cart-section">your cart</h2>
        <hr />

        {/* {
          isNaN(total_price)
        } */}

        {cart.length === 0
         || isNaN(total_price) 
         ? (
          <div className="cart-has-no-item">
            <h2>You have not added any item to your car</h2>
            <NavLink to="/hot-selling-product-collection">
              <button className="shop-now-button">Shop now</button>
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="cart-in-which-found-the-all-item">
              {cart.map((i) => {
                // console.log("i", i);
                if (Array.isArray(i.id)) {
                  return null;
                }
                // console.log("new i", i)
                return <CartItemCard key={i.id} {...i} />;
              })}
            </div>
            <div className="privacy-cart-section">
              <Privacy />
            </div>
            <div>
            <NavLink
                  to="/checkout-using-add-to-cart-noise-online"
                  onClick={() => checkoutHandler(id, total_price)}
                >
              <div className="checkout-button">
               
                  <button className="checkout-button-in-the-cart">
                    checkout
                  </button>

                <div className="total-price">
                  <p>₹ {total_price}</p>
                </div>
              </div>
              </NavLink>

              <div className="clear-cart">
                <button
                  onClick={clearCart}
                  className="clear-cart-button-in-the-cart"
                >
                  clear cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
