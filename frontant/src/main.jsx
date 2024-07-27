import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import ReactDOM from "react-dom/client";
import "../src/Style/App.scss";
import { AppPrivider } from "./context/productContext.jsx";
import { CartProvider } from "./context/Cart_Context";
import { CheckoutProvider } from "./context/checkout_context.jsx";
import { PaymentProvider } from "./context/payment_context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppPrivider>
    <React.StrictMode>
      <CartProvider>
        <CheckoutProvider>
          <PaymentProvider>
          <App />

          </PaymentProvider>

        </CheckoutProvider>
      </CartProvider>
    </React.StrictMode>
  </AppPrivider>
)
