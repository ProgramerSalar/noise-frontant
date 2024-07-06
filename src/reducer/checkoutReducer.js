const checkoutReducer = (state, action) => {

    if(action.type === "CHECKOUT_PAGE_HANDLER"){
        let {id, total_price} = action.payload;
        // console.log("ids", id)

        let CheckOutProduct;
        CheckOutProduct={
            id: id,
            total_price: total_price
        }
        return {
            ...state,
            checkout:[...state.checkout, CheckOutProduct]
        }

     
    }
    return state

}


export default checkoutReducer;