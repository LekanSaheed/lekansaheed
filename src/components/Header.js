import {Link} from 'react-router-dom'
import React from 'react'

import SearchBar from './SearchBar'
import Total from './Total'

import './Header.css'
import { GlobalContext } from './context'

const Header = () => {
const {handleNavToggle} = GlobalContext()

    return (
        <>
        <div className='info'>
            info here
        </div>
      <header className="header_container">
          <div className='main_group'>
              <div className='nav-logo'>
                    <div className='menu-btn' onClick={handleNavToggle}>
                         <i className='bi bi-list'></i>      
                    </div>
                    <Link to='/'><span className='logo'>
                            GoCart<i className="bi bi-cart-dash"></i>
                         </span></Link>
                         
              </div>
              <div className='lg-search'>
              <SearchBar/>
              </div>

          <div className='header_right'>
              <Link to='/login'>
                  <div className='account-props'>
              <div className='login'>
                  <i className='bi bi-person'></i>
                  </div>
                  <span className='mobile-hidden'>Account</span>
                </div>
                  </Link>
                  
              <Link to='/cart'>
                  <div className='cart-props'>
                 <div className='cart_icon'>
                      <i className='bi bi-bag-dash'></i>
                        <Total/>
                        
                 </div> 
                 <span className='mobile-hidden'>Cart</span>
                 </div>
              </Link>          
         </div>

     </div>
                <div className='xs-search'>
                <SearchBar/> 
              </div> 
            </header>
       
        </>
    )
}

export default Header
