

export const reducer = (state, action) => {
        if(action.type === "ADD_TO_CART"){

            const uid = action.payload.id
            const exists = state.cart.some(item => item.id === uid);

            console.log(exists)
            const newcart = exists
        ? state.cart.map(item => item.id === uid ? { ...item, quantity: item.quantity + 1 } : item) :
         [...state.cart, action.payload];
         console.log(state.cart.quantity)
            return{
                ...state,
                cart: newcart
            }
        }

        if(action.type === "REMOVE_ITEM") {
           const items = action.payload
           console.log(items)
           const newCart = state.cart.filter(item => item !== items)
           console.log("NEW_CART:",state.cart)
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