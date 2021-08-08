import React from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from './context'

const Logout = () => {
    const { logout} = GlobalContext()
    return (
        <div>
            <h1>Log out</h1>
            <h2>Are you sure YOu want to logout</h2>
            <button onClick={logout}>Logout</button>
            
            <Link to='/'>Go back</Link>
            <ul className='my-flex'>
                <li>flex1</li>
                <li>flex2</li>
                <li>flex3</li>
                <li>flex4</li>
                <li>flex1</li>
                <li>flex2</li>
                <li>flex3</li>
                <li>flex4</li>
                <li>flex1</li>
                <li>flex2</li>
                <li>flex3</li>
                <li>flex4</li>
                <li>flex1</li>
                <li>flex2</li>
                <li>flex3</li>
                <li>flex4</li>
                <li>flex1</li>
                <li>flex2</li>
                <li>flex3</li>
                <li>flex4</li>
            </ul>
            
        </div>
    )
}

export default Logout
