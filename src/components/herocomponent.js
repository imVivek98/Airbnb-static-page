import React from 'react';
import '../styles.css';
import mainimage from '../images/Pixabay-real-estate-stock-photos.jpg';


export default function Herocomponent(){
    return(
        <div>
            <img src={mainimage} className='main-image' />
            <div className='main-info'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive sections led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}