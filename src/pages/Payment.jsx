import React from "react";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import phonePe from "../assets/payment_image/phone-pe.png";
import google_pay from "../assets/payment_image/google_pay.png";
import paytm from "../assets/payment_image/paytm.png";
import upi from "../assets/payment_image/upi.png";
import { CiCreditCard1, CiShoppingCart } from "react-icons/ci";
import { IoCardSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Payment = () => {
  return (
    <div className="checkout-payment-section">
      <div className="all-contaiener-are-here">
        <div>
          <CheckoutHeader />
        </div>
        <div className="ordersummery">
          <CiShoppingCart />
          <p>order-summary</p>
          <p className="ruppie-symbool">₹</p>
          {/* {checkout.map((i) => {
              console.log("totalPrice", i.total_price);
              return <span>{i.total_price}</span>;
            })} */}
          <span>2399</span>
        </div>
        <div className="payment-middle-section">
          <p className="payment-desc">
            Please select payment method to complete the order
          </p>

          <div className="payment-section-container">
            <div className="upi-payment-section">
              <div className="payment-section">
                <img className="payment-logo" src={phonePe} alt="" />
                <p className="name-of-the-payment">PhonePe</p>
              </div>
              <div className="payment-section">
                <img className="payment-logo" src={google_pay} alt="" />
                <p className="name-of-the-payment">G Pay</p>
              </div>
              <div className="payment-section">
                <img className="payment-logo" src={paytm} alt="" />
                <p className="name-of-the-payment">Paytm</p>
              </div>
              <div className="payment-section">
                <img className="payment-logo" src={upi} alt="" />
                <p className="name-of-the-payment">Any UPI</p>
              </div>
            </div>
            <div className="pay-upi-id">
              <div className="upi-id-with-text">
                <div className="all-input-things-are-here">
                  <p>Pay via UPI ID</p>
                  <div>
                    <input type="text" placeholder="Enter your UPI ID" />
                    <button>Pay</button>
                  </div>
                </div>
              </div>
              <div className="pay-with-cards">
                <div className="logo-of-the-card">
                  <IoCardSharp />
                  <p>Pay via Card</p>
                </div>
                <div className="payment-money-text">
                  <span>2399</span>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <CheckoutFooter />
        </div>
      </div>
    </div>
  );
};

export default Payment;
