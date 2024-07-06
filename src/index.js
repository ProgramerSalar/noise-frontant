import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Style/App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppPrivider } from "./context/productContext";
import { CartProvider } from "./context/Cart_Context";
import { CheckoutProvider } from "./context/checkout_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppPrivider>
    <React.StrictMode>
      <CartProvider>
        <CheckoutProvider>
        <App />

        </CheckoutProvider>
      </CartProvider>
    </React.StrictMode>
  </AppPrivider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
