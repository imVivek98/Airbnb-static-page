import React from 'react';
import '../styles.css';


export default function Cardcomponent(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === 'Online'){
        badgeText = "ONLINE"
    }

    return(
        <div className='card'>
            {badgeText && <div className='sold-out'>{badgeText}</div>}
            <img src={props.img} className='cardimages'></img>
            <div className='card-stats'>
                <img src={props.starRating} className="star-image"></img>
                <span>{props.rating}</span>
                <span  className='gray'>(6) .</span>
                <span  className='gray'>{props.country}</span>
            </div>
            <p>{props.topic}</p>
            <p><b>{props.rate}</b> / person</p>
        </div>
    )
}