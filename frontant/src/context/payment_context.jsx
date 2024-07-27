import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/checkoutReducer";

const PaymentContext = createContext();

const getLocalPaymenttData = () => {
  let localCartData = localStorage.getItem("manishCart");
  if (!localCartData || JSON.parse(localCartData).length === 0) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  checkout: getLocalPaymenttData(),
};

const PaymentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const paymentHandler = (id, total_price) => {
    dispatch({
      type: "CHECKOUT_PAGE_HANDLER",
      payload: { id, total_price },
    });
    // console.log("idr", id)
  };


  useEffect(() => {
    localStorage.setItem("manishCart", JSON.stringify(state.checkout));
  }, [state.checkout])

  return (
    <PaymentContext.Provider value={{ ...state, paymentHandler }}>
      {children}
    </PaymentContext.Provider>
  );
};

const usePaymentContext = () => {
  return useContext(PaymentContext);
};

export { PaymentProvider, usePaymentContext };
