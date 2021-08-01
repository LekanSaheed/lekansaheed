

export const reducer = (state, action) => {
    if(action.type === "SET_PRODUCTS"){
        const allProducts = action.payload
        return{
            ...state,
            products: allProducts,
            isLoading: false
        }
    }
    if(action.type === "TOGGLE_NAV"){
        return{
            ...state,
            navToggle: !state.navToggle
        }
    }
        if(action.type === "ADD_TO_CART"){

            const uid = action.payload.id
            const exists = state.cart.some(item => item.id === uid);

            const newcart = exists
        ? state.cart.map(item => item.id === uid ? { ...item, quantity: item.quantity + 1 } : item) :
         [...state.cart, action.payload];
            return{
                ...state,
                cart: newcart
            }
        }

        if(action.type === "REMOVE_ITEM") {
           const items = action.payload
           const newCart = state.cart.filter(item => item !== items)
            return{
                ...state,
                cart: newCart,
            }
        }
        if(action.type === 'CLEAR_ALL'){
            return{
                ...state,
                cart:[],
            }
        }
      return state
}