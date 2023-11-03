import React from 'react'
import Banner_Logo from '../../assets/images/Banner_Logo1.png'
import "./index.css";

function Banner() {
    return (
        <div className='banner'>
        <img src={Banner_Logo} alt="Banner of the app" width="700" height="60" />
        </div>
    )
}

export default Banner
