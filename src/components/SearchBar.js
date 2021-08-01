import React, {} from 'react'
import {  } from './context'

import './Search.css'

const SearchBar = () => {
    return (
        <div className='search_fluid'>
            <div className='search_container'>
                <i className='bi bi-search'></i>
                <input placeholder='Search for products, brands and categories' className='search' type='search'/>
            </div>
        </div>
    )
}

export default SearchBar
