import React, {useContext, useReducer} from 'react'
import product from './data'
import {reducer} from './reducers/reducer'

const defaultState = {
    products: product,
    cart: [],
}
const AppContext = React.createContext({...product})


const GlobalContext = () => {
  return  useContext(AppContext)
} 
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

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
    value={{ state, addToCart, removeItem, clearAllItems }}
    
    >{children}</AppContext.Provider>
}

export {AppProvider, GlobalContext}