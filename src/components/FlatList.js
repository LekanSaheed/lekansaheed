import {Carousel} from 'react-responsive-carousel'
import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import png1 from '../assets/download.jpg'
import png2 from '../assets/images.jpg'
import png3 from '../assets/gadgetsale.jpg'
import png4 from '../assets/phonesale.jpg'
import png5 from '../assets/imagesale.jpg'
import png6 from '../assets/gatdgets.jpg'

const FlatList = () => {
    return (
        <div className='carousel-container'>
            <Carousel dynamicHeight={false} showArrows={false} centerSlidePercentage={80} centerMode={true} autoPlay={true} infiniteLoop={true} showThumbs={false} swipeable={true}> 
            <div>
                 <img src={png3} alt='info'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={png4} alt='info'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={png5} alt='info'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={png6} alt='info'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={png1} alt='info'/>
                    <p className="legend">Summer sales</p>
                </div>
                <div>
                    <img src={png2} alt='info'/>
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        </div>
    )
}

export default FlatList
