import React, {useState, useEffect} from 'react'
import { GlobalContext } from './context'

const Total = () => {

    const {state} = GlobalContext()
    const [total, setTotal] = useState(0)
useEffect(() => {
    const quantity = state.cart.map(item => {
        return item.quantity
    })
    
    const add = (accumulator, a) => {
        return accumulator + a
    }
  const sum =  quantity.reduce(add, 0)
 
    setTotal(state.cart.length + sum - state.cart.length)
}, [state.cart])
   
    return (
        <div className='total'>
            {total}
        </div>
    )
}

export default Total
