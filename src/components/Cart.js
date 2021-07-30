import React from 'react'
import { GlobalContext } from './context'

const Cart = () => {
    
    const {state, removeItem, clearAllItems} = GlobalContext()
    return (
       
        <div>
             
            {state.cart.length < 1 ?<h1>No item in cart</h1> : state.cart.map((items, index) => {
                const {item, price, stock, id, quantity} = items
                return(
                    <div key={id}>
                    <div>
                        {item}
                        </div>       
                        <div>
                        {price}
                        </div>
                        <div>
                        quantity    {quantity}
                        </div>

                        <div>In Stock: {stock}</div>
                        <button className="btn btn-danger" onClick={() => removeItem(items)}>remove</button>

                    </div>
                   
                )
            })}

<br/>
         {state.cart.length > 0 && <button className='btn btn-danger' onClick={clearAllItems}> Clear All</button>}
        </div>
    )
}

export default Cart
