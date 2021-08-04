import React, {useState, useEffect} from 'react'
import { GlobalContext } from './context'

const Total = () => {

    const {state} = GlobalContext()
    const [total, setTotal] = useState(0)
useEffect(() => {
    const totalQuantity = state.cart.reduce((sum, product) => sum + product.quantity, 0)
    setTotal(totalQuantity)
}, [state.cart])
   
    return (
        <div className='total'>
            {total}
        </div>
    )
}

export default Total
