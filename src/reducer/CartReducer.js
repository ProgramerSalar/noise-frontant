const cartReducer = (state, action) => {
  if (action.type === "Add_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // takle theexisting product
    let existingProduct = state.cart.find(
      (currItem) => currItem.id === id + color.ColorTextName + amount
    );
    console.log("existring Product", existingProduct);

    if (existingProduct) {
      let updateProduct = state.cart.map((currElm) => {
        if (currElm.id === id + color.ColorTextName + amount) {
          console.log("matched id");
          let newAmount = currElm.amount + amount;
          return {
            ...currElm,
            amount: newAmount,
          };
        } else {
          return currElm;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color.ColorTextName + amount,
        name: product.name,
        price: product.price,
        old_price: product.old_price,
        quantity: product.quantity,
        amount,
        colorImage: color.colorImage,
        colorTextName: color.ColorTextName,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.quantity) {
          incAmount = curElem.quantity;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;
    //   console.log("initialVal", initialVal)
    return initialVal
    }, 0);
    // console.log("totalProce", total_price)

    return {
        ...state,
        total_price: total_price
        
    }
  }
  return state;
};

export default cartReducer;
