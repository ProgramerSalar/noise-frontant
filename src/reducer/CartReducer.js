

const cartReducer  = (state, action) => {

    if (action.type === "Add_TO_CART"){
        let {id, color, amount, product} = action.payload;

        let cartProduct;
        cartProduct = {
            id: id + color.ColorTextName + amount,
            name: product.name,
            price: product.price,
            old_price: product.old_price,
            quantity: product.quantity,
            amount,
            colorImage: color.colorImage,
            colorTextName: color.ColorTextName
        }
        
        return {
            ...state,
            cart:[...state.cart, cartProduct],
        }
    }
    return state;
   


}


export default cartReducer;