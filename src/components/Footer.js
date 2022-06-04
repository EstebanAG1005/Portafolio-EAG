import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#pro'>Proyectos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#cono'>Conocimientos</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <a className='EAG' href='/' >EAG</a>
                    <span className='line'></span>
                    <p>© 2022 Esteban Aldana Guerra • All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
