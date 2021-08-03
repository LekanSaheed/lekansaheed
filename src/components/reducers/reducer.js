

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

            action.payload.quantity = 1
            return{
                ...state,
                cart: [...state.cart, action.payload]
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
        if(action.type === "PRODUCT_DETAILS"){
            return{
                ...state,
                showDetails:true,
                productDetails: [action.payload]
            }
        }
        if(action.type === "CLOSE_MODAL"){
            return{
                ...state,
                showDetails: false
            }
        }
        if(action.type === "INCREMENT"){
            
            const working_on = action.payload.id
            const  increase = state.cart.map(item => item.id === working_on ? {...item, quantity: item.quantity + 1} : item)

            return{
                ...state,
                cart: increase
            }
        }
        if(action.type === "DECREMENT"){
            const items = action.payload
            const working_on = action.payload.id
            const  decrease = state.cart.map(item => item.id === working_on ? {...item, quantity: item.quantity - 1} : item)
            if(action.payload.quantity === 1){
                const newCart = state.cart.filter(item => item !== items)
                return{
                    ...state,
                    cart: newCart
                }
            }
            return{
                ...state,
                cart: decrease
            }
        }
      return state
}