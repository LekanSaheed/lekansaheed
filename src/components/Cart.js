import React from 'react'
import { GlobalContext } from './context'
import './Cart.css'
const Cart = () => {
    
    const {state, removeItem, clearAllItems, increment, decrement} = GlobalContext()
    
    return (
       
        <div className='cart-container'>
             
            {state.cart.length < 1 ?<h1>No item in cart</h1> : state.cart.map((items, index) => {
                // items.quantity = 0
                return(
                    
                    <div key={index } className='cart-product'>
                        <div className='cart-item-img-container'>
                            <img src={items.iurl} alt='cart item'/>
                            </div>
                    <div className='cart-item-name'>
                        {items.item}
                        </div>       
                        <div className='cart-item-price'>
                        ${items.price}
                        </div>
                        <div>
                        quantity    {items.quantity}
                        </div>
                        <button onClick={() => decrement(items)}>-</button><br/>
                        <button onClick={() => increment(items)}>+</button>
                        <div>In Stock: {items.stock}</div>
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
