// create a context
// provider
// consumer -> useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = `${import.meta.env.VITE_BACKENT_URL}/product_details`;


// privider
const AppPrivider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const res = await axios.get(url);
      // console.log("data", res)
      const products = await res.data;
      // console.log("products", products)
      dispatch({
        type: "SET_API_DATA", // write a random things
        payload: products,
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: "API_ERROR", // write a random things
      });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({
      type: "SET_SINGLE_LOADING",
    });

    try {
      const res = await axios.get(url);
      console.log("data", res)
      const singleProduct = await res.data;
      console.log("products", singleProduct)
      dispatch({
        type: "SET_SINGLE_PRODUCT", // write a random things
        payload: singleProduct,
      });
    } catch (error) {
      // console.log(error)
      dispatch({
        type: "API_SINGLE_ERROR", // write a random things
      });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custome hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppPrivider, AppContext, useProductContext };
