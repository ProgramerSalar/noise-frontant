const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      
  
     
  
      case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
  
      case "FILTER_PRODUCTS":
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
  
        const { text, category, company, color } = state.filters;
  
        if (text) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }
  
        if (category !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.category === category
          );
        }
  
        if (company !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
          );
        }
  
        if (color) {
          tempFilterProduct = tempFilterProduct.filter((curElem) =>
            curElem.colors.includes(color)
          );
        }
        return {
          ...state,
          filter_products: tempFilterProduct,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;