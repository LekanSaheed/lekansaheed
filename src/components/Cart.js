import React from 'react'
import { GlobalContext } from './context'
import './Cart.css'
const Cart = () => {
    
    const {state, removeItem, clearAllItems} = GlobalContext()
    return (
       
        <div className='cart-container'>
             
            {state.cart.length < 1 ?<h1>No item in cart</h1> : state.cart.map((items, index) => {
                const {item, price, stock, id, quantity, iurl} = items
                return(
                    <div key={id } className='cart-product'>
                        <div>
                            <img src={iurl} alt='cart item'/>
                            </div>
                    <div className='cart-item-name'>
                        {item}
                        </div>       
                        <div className='cart-item-price'>
                        ${price}
                        </div>
                        <div>
                        quantity    {quantity}
                        </div>

                        <div>In Stock: {stock}</div>
                        <button className="btn-remove" onClick={() => removeItem(items)}>remove</button>

                    </div>
                   
                )
            })}

<br/>
         {state.cart.length > 0 && <button className='btn btn-danger' onClick={clearAllItems}> Clear All</button>}
        </div>
    )
}

export default Cart
