import {Link} from 'react-router-dom'
import React from 'react'

import './Products.css' 

import { GlobalContext } from './context'

const Products = () => {
const {state, addToCart} = GlobalContext()

    return (
        <>
        <div className='product_container'>

           
            {state.products.map((items) => {
                const {item, price} = items
                return(
                    <>
                    
                              <div className='products' key={items.id}>
                                  <li>{item}<br/>
                                 ${price}<br/></li>
                                  <span className='btn-to-cart' onClick={() => addToCart(items)}>Add To Cart</span>
                              </div>
                              
                          
                   </>
            )
            })}
        </div>
<h1>Product Categories</h1>
        <div className='category_container'>
<Link><div className='category_node'><i className="bi bi-earbuds earbuds"></i><span className='category_title' >Phone Accessories</span></div></Link>
<Link><div className='category_node'><i className="bi bi-phone-fill"></i><span className='category_title'>Phones</span></div></Link>
<Link><div className='category_node'><i className="bi bi-headset-vr"></i><span className='category_title'>Gadgets</span></div></Link>
<Link><div className='category_node'><i className="bi bi-window-dock"></i><span className='category_title'>Home Appliances</span></div></Link>
        </div>
        </>
    )
}

export default Products
