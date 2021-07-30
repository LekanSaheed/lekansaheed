import React from 'react'

import Total from './Total'
import {Link} from 'react-router-dom'
import './Header.css'
import SearchBar from './SearchBar'
const Header = () => {
    return (
        <>
            <div className="header_container">
                <div>
                <i className='bi bi-list'></i>
                        <span className='logo'>
                        goCart<i className="bi bi-cart-dash"></i></span>
                </div>
           
                  <div className='header_right'>
                      <Link to='/cart'>
                      <div className='cart'>
                      <i className='bi bi-basket'></i>
                        <Total/>
                      </div> 
                      </Link>
                         
                        
                </div>
                        
            </div>
        <SearchBar/>
        </>
    )
}

export default Header
