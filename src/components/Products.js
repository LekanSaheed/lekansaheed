import {Link} from 'react-router-dom'
import MyLoader from './LoadingScreen'
import React, { } from 'react'
import { GlobalContext } from './context'
import Tag from './Tag'

import './Products.css' 

const Products = () => {
const { state, addToCart} = GlobalContext()
    return (
        <>
        <div className='product_container'>

           
            {state.isLoading ? <><MyLoader/> <MyLoader/> <MyLoader/></> :
            
             state.products.map((items) => {
                    const {item, price, iurl, id} = items
                    console.log('id',id)
                    return( 
                        <>   {
                                  <div className='products' key={id}>
                                      
                                  
                                          <img src={iurl} alt='prods' height='100' width='100'/>
                                      
                                      <li>{item}<br/>
                                     ${price}<br/></li>
                                      <span className='btn-to-cart' onClick={() => addToCart(items)}>Add To Cart</span>
                                  </div>}
                      </>
                )
                })
               
            }
        </div>
<Tag text={'Product categories'}/>
        <div className='category_container'>
<Link to='/'><div className='category_node'><i className="bi bi-earbuds earbuds"></i><span className='category_title' >Phone Accessories</span></div></Link>
<Link to='/'><div className='category_node'><i className="bi bi-phone-fill"></i><span className='category_title'>Phones</span></div></Link>
<Link to='/'><div className='category_node'><i className="bi bi-headset-vr"></i><span className='category_title'>Gadgets</span></div></Link>
<Link to='/'><div className='category_node'><i className="bi bi-window-dock"></i><span className='category_title'>Home Appliances</span></div></Link>
        </div>
        </>
    )
}

export default Products
