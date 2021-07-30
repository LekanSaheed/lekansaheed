import React, {useState, useEffect} from 'react'
import { GlobalContext } from './context'

const Total = () => {

    const {state} = GlobalContext()
    const [total, setTotal] = useState(0)
useEffect(() => {
    setTotal(state.cart.length)
}, [state.cart])
   
    return (
        <div className='total'>
            {total}
        </div>
    )
}

export default Total
