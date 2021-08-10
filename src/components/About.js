import React, {useEffect} from 'react'
import './About.css'
import about from '../assets/about.png'

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <div className='about-container'>
            <img src={about} alt='about'/>
            <h3>Our About</h3>
            <p>
                GoCart is an Online Store where good quality phones, phones Accessories and Gadgets are sold, 
                you get to buy these products and the delivery is on us, Yes, totally free...sike😉. Efficient Service 
                and Providing quality products is our utmost priorities, and we shall uphold these priotities.<br/>
                <sub>-Lekan Saheed</sub>

            </p>
        </div>
    )
}

export default About
