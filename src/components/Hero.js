import React from 'react'
import './Hero.css'
import Video from '../../assets/Vid/Video.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted className="VideoFondo">
                <source src={Video} type="video/mp4" />
            </video>
            <div className='content'>
                <p>Contactame</p>
                <p>esteban10052002@gmail.com</p>
                <p>Esteban Aldana Guerra</p>
                <p>Programador</p>
            
            </div>
        </div>
    )
}

export default Hero
