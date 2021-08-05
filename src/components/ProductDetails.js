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
                           <p><span className='product-title-desc'>Product:</span> {items.item}</p>
                            <p><span>Price: </span>${items.price}</p>
                            <p className='product-desc-desc'><span style={{color: 'deepblue', 
                            fontWeight: 'bolder'
                            }}>Description:</span> {items.desc}</p>
                          
                           <div className="to-cart-prop">
                          <div>
                        
                              </div>
                           { state.cart.find(item => item.id === items.id) ?  <div className='increment-prop'>
                               <p className='visual-anim'>Item in cart<i className='bi bi-cart-dash'></i></p>
                                  <Link to='/cart' onClick={closeModal}><div className='go-to-cart'>GO TO CART</div></Link>
                                 <p>or</p>
                                  <div className='continue-shopping' onClick={closeModal}>
                            <span>CONTINUE SHOPPING</span>
                                    </div>  
                               </div>
                               :
                               <div className='btn-to-cart' onClick={() => addToCart(items)}>
                               <i className='bi bi-cart'></i>
                               <span>ADD TO CART</span>
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
