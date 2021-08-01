import React, {useContext, useReducer, useEffect} from 'react'
import {db} from './firebase'
import {reducer} from './reducers/reducer'


const AppContext = React.createContext()

const defaultState = {
    products: [],
    cart: [],
    isLoading: true,
    navToggle: false
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
    return <AppContext.Provider 
    value={{ state, addToCart, removeItem, clearAllItems, handleNavToggle }}
    
    >{children}</AppContext.Provider>
}

export {AppProvider, GlobalContext}