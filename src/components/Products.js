import {Link} from 'react-router-dom'
import MyLoader from './LoadingScreen'
import React, { } from 'react'
import { GlobalContext } from './context'
import Tag from './Tag'
import ProductDetails from './ProductDetails'
import './Products.css' 

const Products = () => {
    
const { state, productDetails} = GlobalContext()

    return (
        <>
        {state.showDetails && <ProductDetails/>}
        <div className='product_container'>

           
            {state.isLoading ? <><MyLoader/> <MyLoader/> <MyLoader/></> :
            
             state.products.map((items, index) => {
                // const {quantity = [0]} = items
                // const newItem = {...items, {quantity}}
               
                    return( 
                      
                        <div key={index}>   {
                                  <div className='products' onClick={() => productDetails(items)}>
                                      
                                  
                                          <img src={items.iurl} alt='prods' height='100' width='100'/>
                                      
                                      <li>{items.item}<br/>
                                     ${items.price}<br/></li>
            q                        {items.quantity}
                                  
                                  </div>}
                      </div>
                    
                )
                })
               
            }
        </div>
<Tag text='Product categories' bc='green'/>


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
