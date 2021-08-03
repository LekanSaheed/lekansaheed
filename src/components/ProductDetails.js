import React from 'react'
import {GlobalContext} from './context'
import {Link} from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {
    const {state, addToCart, closeModal} = GlobalContext()
   
    return (
        <div className='detail-modal'>
            
                {state.productDetails.map((items, index) => {
                    return(
                        <div className='modal-child' key={index}>
                            <button className='btn-close' onClick={closeModal}>CLOSE</button>
                          <div>
                             <div className='img-details-container'>
                             <img className="img-details" src={items.iurl} alt='stateless'/>
                             </div>
                           <p>Product:{items.item}</p>
                            <p><span>Price:</span>${items.price}</p>
                           Description: <p>{items.desc}</p>
                          
                           <div className="to-cart-prop">
                          <div>
                        
                              </div>
                           { state.cart.find(item => item.id === items.id) ?  <div className='increment-prop'>
                               <p>Item in Cart</p>
                                  <Link to='/cart' onClick={closeModal}>Go To Cart</Link>
                                 <p>or</p>
                                  <div onClick={closeModal}>
                            <span>Continue shopping</span>
                                    </div>  
                               </div>
                               :
                               <div className='btn-to-cart' onClick={() => addToCart(items)}>
                               <i className='bi bi-cart'></i>
                               <span>Add To Cart</span>
                            </div>
                            // const newcart = exists ? state.cart.map(item => item.id === uid ? {...item, quantity: parseInt(item.quantity) + 1} : item) : [...state.cart, action.payload]  }
                           }
                              
                           
                              </div>
                              </div>
                            </div>
                    )
                })}
        </div>
    )
}

export default ProductDetails
