import {Link} from 'react-router-dom'
import MyLoader from './LoadingScreen'
import React, {useEffect, useState} from 'react'

import { GlobalContext } from './context'
import {db} from './firebase'

import './Products.css' 

const Products = () => {
const {state, addToCart} = GlobalContext()
const [products, setProduct] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    let productObj =  true//JSON.parse(localStorage.getItem(('item')))
    if (!productObj){
      setProduct(productObj)
    }
    else{
      const fetchProducts = async () => {
        try {
          if (!db) return;
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
          setIsLoading(false)
          let stringProducts = JSON.stringify(allProducts)
          localStorage.setItem('item', stringProducts)
        } catch (error) {
          console.log("error", error);
        }
      }; fetchProducts();
    }   
  }, [setProduct]);

    return (
        <>
        <div className='product_container'>

           
            {isLoading ? <><MyLoader/> <MyLoader/> <MyLoader/></> : products.map((items) => {
                    const {item, price, iurl, id} = items
                    console.log(id)
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
