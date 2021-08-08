import React from 'react'
import {GlobalContext} from './context'

const Orders = () => {
    const {state } = GlobalContext()
    const orders = state.order.map(order => {
        return(
            <div>
                <div>
                {order.item}
                </div>
                <div>
                {order.price}
                </div>
                <div>
                {order.quantity}
                </div>
                <div>
                {order.item}
                </div>
            </div>
        )
    })
    return (
        <div>
            
        </div>
    )
}

export default Orders
