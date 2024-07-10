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
import { useCheckoutContext } from "../context/checkout_context";
import { usePaymentContext } from "../context/payment_context";
import axios from "axios";
import { FaArrowUpAZ } from "react-icons/fa6";
import image from "../assets/Image/logo.png"

const Payment = () => {
  const { checkout } = usePaymentContext();
  // console.log(checkout)

  const price = checkout.map((i) => i.total_price);
  console.log("price", price)
  const total_price = price[1];
  console.log("totalPrice", total_price)
  const amount = price;
  // console.log(amount)

  // const amount = 4000

  const PayHandler = async (amount) => {

    const {data:{key}} = await axios.get("http://localhost:9000/api/getkey")

    const {data:{order}} = await axios.post("http://localhost:9000/api/checkout",{amount})
    


    const options = {
      "key": key, // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "noise",
      "description": "Tutorial of RezorPay",
      "image": "https://www.gonoise.com/cdn/shop/files/Group_4_df1f4045-5a8c-4b00-94bb-a6622f06f7da.png?v=1696847023",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      "callback_url":"http://localhost:9000/api/paymentVerification",
      "prefill": {
          "name": "",
          "email": "",
          "contact": ""
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open()
  }

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
          {checkout.map((i) => {
            // console.log("totalPrice", i.total_price);
            return <span>{i.total_price}</span>;
          })}
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
              {/* <div className="upi-id-with-text">
                <div className="all-input-things-are-here">
                  <p>Pay via UPI ID</p>
                  <div>
                    <input type="text" placeholder="Enter your UPI ID" />
                    <button>Pay</button>
                  </div>
                </div>
              </div> */}
              <div
                className="pay-with-cards"
                onClick={() => PayHandler(amount)}
              >
                <div className="logo-of-the-card">
                  <IoCardSharp />
                  <p>Pay </p>
                </div>
                <div className="payment-money-text">
                  <span>{total_price}</span>
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
