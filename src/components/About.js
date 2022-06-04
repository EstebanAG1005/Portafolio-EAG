import React from 'react'
import Yo from '../../assets/Img/Foto_Mia.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={Yo} alt='Yo' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Soy una persona dinámica, organizada
                        y responsable, con buenas relaciones
                        interpersonales.
                        Al igual que he sido lider de grupos
                        estudiantiles dentro de mi entorno y tengo
                        la mejor disposición para la realización de
                        mis labores
                    </p>
                    <p>Me encanta desarrollar en web, al igual que aprender de tecnologías nuevas, y de los nuevos cambios de nuestro ambiente  </p>
                    <a className='button5' href='#cono'>Conocer Mas</a>
                </div>
            </div>
        </div>
    )
}

export default About
