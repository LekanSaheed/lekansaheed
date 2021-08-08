import {Link } from 'react-router-dom'
import React from 'react'

import './Nav.css'
import { GlobalContext } from './context'

const Nav = () => {

    const {state, handleNavToggle} = GlobalContext()
const navdata = [{
    text: 'Phones',
    icon: <i className='bi bi-phone'></i>
},
{
    text: 'Home Appliances',
    icon: <i className='bi bi-tv'></i>
},
{
    text: 'Laptops & Computers',
    icon: <i className='bi bi-laptop'></i>
},
{
    text: 'Phone Accessories',
    icon: <i className='bi bi-earbuds'></i>
},
{
    text: 'Phone Parts',
    icon: <i className='bi bi-tools'></i>
},
{
    text: 'Gaming Consoles',
    icon: <i className='bi bi-controller'></i>
},
{
    text: 'Electronics',
    icon: <i className='bi bi-play-circle'></i>
},
{
    text: 'Utensils',
    icon: <i className='bi bi-clock'></i>
},
{ 
    text: `${state.isLoggedIn ? 'Log out' : 'Login'}`,
    icon: <i className="bi bi-person"></i>,
    link: `${state.isLoggedIn ? '/logout' : '/login'}`
}]

   
    return (
        <div className={`${state.navToggle && 'nav-overlay'}`}>
        <nav className={`${state.navToggle ? 'nav-container show-nav' : 'nav-container'}` }>
            <div onClick={handleNavToggle}><i className='bi bi-x-lg close-nav'></i></div>
            <ul>
            {navdata.map((navs, index) => {
                const {icon, text, link} = navs
                return(
                    <div key={index}>
                    
                        <Link to={link}><li>{icon}<span className='nav-text'>{text}</span></li></Link>
                    
                    </div>
                )
            })}
            </ul>
        </nav>
</div>  
 )
}

export default Nav
