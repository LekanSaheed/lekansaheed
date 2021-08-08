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
    productDetails: [],
    modalContent: '',
    showStatusModal: false,
    cartModalOn: false,
    isLoggedIn: false
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
// useEffect (() => {
//   const products =[
//     {id: 1,item: 'grape',
//   price: 22, stock: 5, brand: 'oraimo'},
//   {id: 2,item: 'grape',
//   price: 25, stock: 4, brand: 'samsung'},
//   {id: 3,item: 'grape',
//   price: 24, stock: 9, brand: 'tecno'},
//   {id: 4,item: 'grape',
//   price: 23, stock: 7, brand: 'apple'}
//   ]
//   dispatch({type: 'SET_PRODUCTS', payload: products})
// }, []) 
  
  if(state.showStatusModal){
    setTimeout(() => {
      dispatch({type: 'CLOSE_STATUS_MODAL'})
    }, 4000);
  }

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

const successMessage = () => {
  dispatch({type: "SUCCESS_MESSAGE"})
}

const errorMessage = () => {
  dispatch({type: "ERROR_MESSAGE"})
}

const logIn =(email, password)=> {
  dispatch({type: "LOGIN", payload: {email, password}})
}
const logout = () => {
  dispatch({type: "LOGOUT"})
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
               decrement,
                 successMessage,
                   errorMessage,
                    logIn, 
                      logout }}
    
    >{children}</AppContext.Provider>
}

export {AppProvider, GlobalContext}