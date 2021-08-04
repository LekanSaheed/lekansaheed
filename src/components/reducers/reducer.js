

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
                cart: [...state.cart, action.payload],
                modalContent: 'Product Added to cart',
                showStatusModal: true,
                cartModalOn: false
            }
        }
        if(action.type === 'CLOSE_STATUS_MODAL'){
            return{
                ...state,
                showStatusModal: false,
                cartModalOn: false
            }
        }
        if(action.type === "REMOVE_ITEM") {
           
           const items = action.payload
           const newCart = state.cart.filter(item => item !== items)
            return{
                ...state,
                cart: newCart,
                modalContent: 'Product Removed from cart',
                showStatusModal: true
            }
        }
        if(action.type === 'CLEAR_ALL'){
            return{
                ...state,
                cart:[],
                showStatusModal: true,
                modalContent: 'Cart Cleared',
                cartModalOn: true
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

        if(action.type === "SUCCESS_MESSAGE"){
            return{
                ...state,
                modalContent: 'Successfully Added New Product',
                showStatusModal: true,
                cartModalOn: false
            }
        }
        if(action.type === "ERROR_MESSAGE"){
            return{
                ...state,
                modalContent: 'Failed To Add New Product, Please try again',
                showStatusModal: true,
                cartModalOn: true
            }
        }
        if(action.type === "INCREMENT"){
            
            const working_on = action.payload.id
            if(action.payload.quantity === action.payload.stock){
                return{
                    ...state,
                    modalContent: 'Quantity greater than amount in stock',
                    cartModalOn: true
                }
            }
            const  increase = state.cart.map(item => item.id === working_on ?
                 {...item, quantity: action.payload.quantity === action.payload.stock ? 
                    action.payload.quantity - 1 : item.quantity + 1 } : item)

            return{
                ...state,
                cart: increase,
                modalContent: 'Product Quantity Increased',
                showStatusModal: true,
                cartModalOn: false
                
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
                    cart: newCart,
                    modalContent: 'Product Removed',
                    showStatusModal: true,
                    cartModalOn: true
                }
            }
            return{
                ...state,
                cart: decrease,
                modalContent: 'Product Quantity Decreased',
                showStatusModal: true,
                cartModalOn: true
            }
        }
      return state
}