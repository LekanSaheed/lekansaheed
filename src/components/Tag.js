import React from 'react'

const Tag = ({text, bc, pad, padLeft, padRight, padTop, padBottom, tagWidth, tagFontSize, tagColor}) => {
    return (
        <div className='tag' style={{backgroundColor: bc, padding: pad,
         paddingLeft: padLeft,
         paddingRight: padRight,
         paddingTop: padTop,
         paddingBottom: padBottom,
         width: tagWidth,
         fontSize: tagFontSize,
         color: tagColor }}>
            {text}
        </div>
    )
}

export default Tag
