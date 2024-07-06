import React from 'react'
import logo from "../assets/Image/logo.png";
import discount from "../assets/checkout_footer/discount.png";
import { FaArrowRightLong } from "react-icons/fa6";

// import discount from "../assets";

const CheckoutHeader = () => {
  return (
    <div>
        <div className="checkout-heading-section">
            <img src={logo} alt="" />
            <p>Mobile</p>
            <FaArrowRightLong />

            <p>Address</p>
            <FaArrowRightLong />

            <p>Pay</p>
          </div>
          <div className="discount-container">
            <p>
              <img src={discount} alt="" />
              Extra DisCount Available at Payment Step
            </p>
          </div>
    </div>
  )
}

export default CheckoutHeader