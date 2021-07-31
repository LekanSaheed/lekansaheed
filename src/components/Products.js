import {Link} from 'react-router-dom'
import MyLoader from './LoadingScreen'
import React, {useEffect, useState} from 'react'

import { GlobalContext } from './context'
import {db} from './firebase'

import './Products.css' 

const Products = () => {
const { addToCart} = GlobalContext()
const [products, setProduct] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  localStorage.removeItem('item')
    const fetchProducts = async () => {
      try {
        const ref = db.collection("phones");

        const docs = await ref.get();

        let allProducts = [];
        docs.forEach((doc) => {
          const {item, price, stock, shortDesc, desc, iurl, category}= doc.data();
          allProducts.push({
            item, price, stock, shortDesc, desc, id: doc.id, iurl, category
          });
        });
        setProduct(allProducts);
        console.log(allProducts)
        products.length >= 1 && setIsLoading(false)
        console.log('Loading:', isLoading, products)
      } catch (error) {
        console.log("error", error);
      }
      console.log('Loading:', isLoading, products)
    }; fetchProducts();
  }   
, [setProduct, products, isLoading]);
    return (
        <>
        <div className='product_container'>

           
            {isLoading ? <><MyLoader/> <MyLoader/> <MyLoader/></> :
            
             products.map((items) => {
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
<h1>Product Categories</h1>
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
