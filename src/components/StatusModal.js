import React from 'react'
import { GlobalContext } from './context'

const StatusModal = ({modalContent}) => {
    const {state} = GlobalContext()
    return (
        <div className='status-modal' style={{background:`${state.cartModalOn && 'maroon' }`}}>
            {modalContent}
        </div>
    )
}

export default StatusModal
