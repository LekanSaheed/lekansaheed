import React from 'react'
import qservers from '../assets/qservers.png'
import linkedin from '../assets/linkedin.png'
import godaddy from '../assets/godaddy.jpg'
import react from '../assets/react.png'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import netlify from '../assets/netlify.jpg'
import github from '../assets/github.jpg'
const Partners = () => {

    const data = [{
        text: 'GoDaddy',
        img: godaddy
    },
{   text: 'Qservers',
    img: qservers
},{
       text:  'React',
    img: react
},{
    text: 'Netlify',
    img: netlify
},{
    text: 'LinkedIn',
    img: linkedin
},
{
    text: 'GitHub',
    img: github
},{
    text: 'VsCode',
    img: vscode
},{
    img: firebase
}
]
    return (
        <div className='footer-header'>
        <h2>Our Partners</h2>
        <div className='partners'>
            {data.map(list => {
                return(
                    <li>
                        <img src={list.img} alt='partners' style={{width: '150px'}}/>
                        <p>{list.text}</p>
                    </li>
                    
                )
            })}
        </div>
    </div>
    )
}

export default Partners
