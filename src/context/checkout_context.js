import { Children, createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"



const CheckoutContext = createContext()


const initialState = {
    checkout : [],
    total_amount : "",
    total_item : "", 
    shipping_fee: 200
}

const CheckoutProvider = ({children}) => {
    
    cosnt [state, dispatch] = useReducer(reducer, initialState)

    const addtoCart
}