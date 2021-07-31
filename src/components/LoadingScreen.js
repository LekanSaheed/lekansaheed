import React from 'react'
import ContentLoader from 'react-content-loader'


const MyLoader = props => (
    <ContentLoader viewBox="0 0 300 270" foregroundColor='darkgray' speed={1.5} backgroundColor='silver' height={140}
    interval={0.5} gradientRatio={2.7} backgroundOpacity={0.6} foregroundOpacity={0.2}
    width={200} {...props} style={{'marginLeft': '-15px', 'marginRight': '10px'}}>
      <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
      <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
      <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
      <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
    </ContentLoader>
  )
  export default MyLoader