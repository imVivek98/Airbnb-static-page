import React from 'react';
import logoimage from '../images/Color-Airbnb-Logo-500x354.webp';
import '../styles.css'


export default function Navbarcomponent(){
    return(
        <nav className='navbar'>
            <img src={logoimage} className="image-logo" alt='airbnb logo'></img>
        </nav>
    )
}