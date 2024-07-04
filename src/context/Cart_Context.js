import {createContext, useContext, useReducer} from "react"
import reducer from "../reducer/CartReducer"


const CartContext = createContext()


const initialState = {
    cart : [],
    total_amount : "",
    total_item: "",
    shipping_fee : 200,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addtoCart = (id, color, amount, product) => {

        dispatch(
            {
                type:"Add_TO_CART", 
                payload:{id, color, amount, product}
            }
        )
    }



    return <CartContext.Provider value={{ ...state, addtoCart }}>
        {children}
    </CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider, useCartContext};