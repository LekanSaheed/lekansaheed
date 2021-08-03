import React from 'react'

const Tag = ({text, bc}) => {
    return (
        <div className='tag' style={{backgroundColor: bc}}>
            {text}
        </div>
    )
}

export default Tag
