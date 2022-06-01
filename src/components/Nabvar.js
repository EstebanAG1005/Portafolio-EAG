import React, { useState } from 'react'
import logo from '../../assets/Img/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    const [navbar, SetNavbar] = useState(false);

    const ChangeColor = () => {
      if (window.scrollY >= 80) {
        SetNavbar(true);
      } else {
        SetNavbar(false);
      }
    };

    window.addEventListener('scroll', ChangeColor);

    return (
        <div className={navbar ? 'header active' : 'header'}>
            <nav className='navbar'>
                <ul className={click ? "nav-menu active" : "nav-menu"}>

                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>ABOUT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>PROYECTOS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>MAS SOBRE MI</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar


