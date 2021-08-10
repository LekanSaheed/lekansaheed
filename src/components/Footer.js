import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
 
    return (
        <>
       
            <div className='footer-container'>
                
            
            <ul>
            <h3>Some quick links</h3>
                <li>Home</li>
                <li>Services</li>
                <li><Link to='/about'>About us</Link></li>
                <li>Terms And conditions</li>
                <li>Send us a message</li>
            </ul>

            <div className='social-follow'>
                <h3>Follow Us On Social media</h3>

                <div>
            <span><i className='bi bi-facebook'></i>Facebook</span>
            <span><i className='bi bi-instagram'></i>Instagram</span>
            <span><i className='bi bi-twitter'></i>Twitter</span>
            <span><i className='bi bi-linkedin'></i>LinkedIn</span>
            <span><i className='bi bi-whatsapp'></i>Whatsapp</span>
                </div>
            </div>
           
           
            </div>
            <p style={{fontSize: '13px', color: 'black', textAlign: 'center', marginTop: '20px'}}>
            <span>Made With <span style={{color: 'maroon'}}>❤ </span>and React</span><br/>Copyright &copy; 2021 Lekan Saheed. All Rights Reserved</p>
        </>
    )
}

export default Footer
