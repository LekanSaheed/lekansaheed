import React from 'react'
import { GlobalContext } from './context'
import './Cart.css'
import {Link} from 'react-router-dom'
import Tag from './Tag'

const Cart = () => {
    
    const {state, removeItem, clearAllItems, increment, decrement} = GlobalContext()
    const totalPrice = state.cart.reduce((sum, product) => sum + product.quantity * product.price, 0)
    return (
       
        <div className='cart-container'>
             <Tag text='MY CART' bc='royalblue'/>
            {state.cart.length < 1 ?<div><h1>No item in cart</h1> <Link to='/'><p className='start-buying'> START BUYING</p></Link></div> : state.cart.map((items, index) => {
                // items.quantity = 0
                return(
                    
                    <div key={index } className='cart-product'>
                        <div className='flex-display-cart'>
                            <Tag text={items.brand} bc='transparent' pad='2px' tagColor='darkblue' padLeft='15px' tagFontSize='12px' tagWidth='100px'/>
                        <div className='cart-item-img-container'>
                            <img src={items.iurl} alt='cart item'/>
                            </div>
                    <div className='cart-item-name'>
                        {items.item}
                        </div>       
                        <div className='cart-item-price'>
                        ${items.price}<br/>
                        <div>In Stock: {items.stock}</div>
                        <button className="btn-remove" onClick={() => removeItem(items)}>remove</button>

                        </div>
                        </div>
                        <div className='quantity-buttons'>
                        <div onClick={() => decrement(items)}><i className="bi bi-caret-up-fill"></i></div>
                        {items.quantity}
                        <div onClick={() => increment(items)}><i className="bi bi-caret-down-fill"></i></div>
                        </div>
                        
                    </div>
                   
                )
            })}

<br/>
         {state.cart.length > 0 && <button className='btn btn-clear-all' onClick={clearAllItems}> Clear All</button>}<br/>
         {state.cart.length > 0 &&<Link to='/'> <span style={{color: 'teal', fontSize: '13px'}}><i className='bi bi-arrow-left'></i> Continue shopping</span></Link>}
      {state.cart.length > 0 &&   <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', marginBottom: '70px', borderBottom: ' solid 2px black'}}> <div style={{fontSize: '18px', fontWeight: 'bold'}}>Total:</div><p className='total-price'>${totalPrice}</p></div>
}

        {state.cart.length > 0 && <Link to='/process-order-payment' ><div className='checkout-btn'>CHECKOUT</div></Link>}
        </div>
    )
}

export default Cart
