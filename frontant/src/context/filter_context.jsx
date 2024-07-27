
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer"


const FilterContext = createContext();



const initialState = {
  filter_products: [],
  all_products: [],

  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
  },
};



export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState)

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({
            type:"UPDATE_FILTERS_VALUE",
            payload:{
                name,value
            }
        })

    }

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
      }, [products]);

    
      return (
        <FilterContext.Provider
          value={{
            ...state,
            updateFilterValue,
          }}>
          {children}
        </FilterContext.Provider>
      )


    

}


export const useFilterContext = () => {
    return useContext(FilterContext);
  };