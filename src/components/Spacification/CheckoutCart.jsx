import React from "react";
import { useCartContext } from "../../context/Cart_Context";
import { useCheckoutContext } from "../../context/checkout_context";
import Navbar from "../NavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

import CheckoutFooter from "../CheckoutFooter";
import { NavLink } from "react-router-dom";
import CheckoutHeader from "../CheckoutHeader";
import { usePaymentContext } from "../../context/payment_context";

const CheckoutCart = () => {
  const { checkout } = useCheckoutContext();
  // console.log("id", checkout.total_price);

  const id = checkout.map((i) => i.id)
  const total_price = checkout.map((i) => i.total_price)

  
  const paymentHandler = usePaymentContext()



  
  // console.log("id", id)
  return (
    <div className="checkout-container">
      {/* <Navbar /> */}
      <div>
        <div className="main-container-saction-in-checkou">
          
          <CheckoutHeader/>
          <div className="ordersummery">
            <CiShoppingCart />
            <p>order-summary</p>
            <p className="ruppie-symbool">₹</p>
            {checkout.map((i) => {
              // console.log("totalPrice", i.total_price);
              return <span>{i.total_price}</span>;
            })}
          </div>
          <div className="middle-section">
            <div>
              <h4>Enter Mobile Number</h4>
              <div className="input-tag">
                <span>+91</span>
                <input
                  className="mobile-number-input"
                  type="text"
                  placeholder="Enter Number"
                />
              </div>
              <div className="salected-tag">
                <input className="checkbox-input" type="checkbox" />
                <p>Notify me for orders, updates & offers</p>
              </div>
            </div>
            <div className="address">
              <div className="heading-address-section">
                <h4>Add New Address</h4>
                <p className="midentry-fields">* Mandatory Fields</p>
              </div>
              <div className="input-address-section">
                <input type="text" placeholder="Enter PinCode" className="Enter-pincode" />
                <div className="city-state">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="State" />
                </div>
                <div className="fullname-address">
                  <input type="text" placeholder="Full Name" />

                  <input type="text" placeholder="Email Address" />
                  <input type="text" placeholder="Full Address" />
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/noise-payment-system" onClick={() => paymentHandler(id, total_price)} >
          <button className="checkout-button">
            Continue
            <FaArrowRightLong />
          </button>
          </NavLink>
          
        </div>
        <div className="checkout-main-container">
          <CheckoutFooter />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
