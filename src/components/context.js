import React, {useContext, useReducer, useEffect} from 'react'
import {db} from './firebase'
import {reducer} from './reducers/reducer'


const AppContext = React.createContext()

const defaultState = {
    products: [],
    cart: [],
    isLoading: true,
    navToggle: false,
    showDetails: false,
    productDetails: []
}


const GlobalContext = () => {
  return  useContext(AppContext)
} 
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    useEffect(() => {
        localStorage.removeItem('item')
          const fetchProducts = async () => {
            try {
              const ref = db.collection("phones");
      
              const docs = await ref.get();
      
              let allProducts = [];
              docs.forEach((doc) => {
                const {item, price, stock, shortDesc, desc, iurl, category}= doc.data();
                allProducts.push({
                  item, price, stock, shortDesc, desc, id: doc.id, iurl, category
                });
              });
              dispatch({type: "SET_PRODUCTS", payload: allProducts})
            } catch (error) {
              console.log("error", error);
            }
          }; fetchProducts();
        }   
      , []);

const handleNavToggle = () => {
    dispatch({type: 'TOGGLE_NAV'})
}
const addToCart = (items) => {
   const newItem = items
    dispatch({type: 'ADD_TO_CART', payload: newItem})
}

const removeItem = (items) => {
    dispatch({type: 'REMOVE_ITEM', payload: items})
}

const clearAllItems = () => {
    dispatch({type: "CLEAR_ALL"})
}
const productDetails =(item) => {
  dispatch({type: "PRODUCT_DETAILS", payload: item})
}

const closeModal = () => {
  dispatch({type: "CLOSE_MODAL"})
}
const increment = (item) => {
  dispatch({type: 'INCREMENT', payload: item})
  
}
const decrement = (item) => {
  dispatch({type: 'DECREMENT', payload: item})
  
}

    return <AppContext.Provider 
    value={{ state,
       addToCart,
        removeItem,
         clearAllItems,
          handleNavToggle,
           productDetails,
            closeModal,
             increment,
               decrement }}
    
    >{children}</AppContext.Provider>
}

export {AppProvider, GlobalContext}