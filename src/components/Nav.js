import {Link } from 'react-router-dom'
import React from 'react'

import './Nav.css'

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
}]
const Nav = () => {
    return (
        <nav className='nav-container'>
            {navdata.map((navs, index) => {
                const {icon, text} = navs
                return(
                    <>
                    <ul key={index}>
                        <Link><li>{icon}<span className='nav-text'>{text}</span></li></Link>
                    </ul>
                    </>
                )
            })}
        </nav>
    )
}

export default Nav
