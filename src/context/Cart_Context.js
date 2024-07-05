import {createContext, useContext, useEffect, useReducer} from "react"
import reducer from "../reducer/CartReducer"


const CartContext = createContext()


const getLocalCartData = () => {

    let localCartData = localStorage.getItem("manishCart")
    if(!localCartData || JSON.parse(localCartData).length === 0){
        return []
    }
    else{
        return JSON.parse(localCartData)
    }
}


const initialState = {
    // cart : [],
    cart : getLocalCartData(),
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


    // to add the data in localstorage 
    useEffect(() => {

        localStorage.setItem("manishCart", JSON.stringify(state.cart))

    }, [state.cart])



    return <CartContext.Provider value={{ ...state, addtoCart }}>
        {children}
    </CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider, useCartContext};