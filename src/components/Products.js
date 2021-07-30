import React from 'react'
import { GlobalContext } from './context'
import {Link} from 'react-router-dom'
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
                                  {item}<br/>
                                 ${price}<br/>
                                  <span className='btn-to-cart' onClick={() => addToCart(items)}>Add To Cart</span>
                              </div><br/>
                              
                          
                   </>
            )
            })}
        </div>
<h1>Product Categories</h1>
        <div className='category_container'>
<Link><div className='category_node'><i className="bi bi-earbuds"></i><span className='category_title' >Phone Accessories</span></div></Link>
<Link><div className='category_node'><i className="bi bi-phone-fill"></i><span className='category_title'>Phones</span></div></Link>
<Link><div className='category_node'><i className="bi bi-headset-vr"></i><span className='category_title'>Gadgets</span></div></Link>
<Link><div className='category_node'><i className="bi bi-window-dock"></i><span className='category_title'>Home Appliances</span></div></Link>
        </div>
        </>
    )
}

export default Products
