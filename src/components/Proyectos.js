import React from 'react';
import Memoria from '../../assets/Img/Memoria.png';
import Ele from '../../assets/Img/eleva.png';
import Calc from '../../assets/Img/Calculadora.png';
import lab from '../../assets/Img/laber1.png';
import './Proyectos.css';

function Proyectos() {
  return (
    <div className="pro" id="pro">

      <div className="proyectos" id="proyectos">
        <div className="container">
          <h2>Proyectos</h2>
          <span className="line" />
          <div className="content">
            <div className="card">
              <img src={Memoria} alt="user1" />
              <h1 className="Titulo">Proyecto Memoria</h1>
              <p>Este proyecto fue desarrollado con las tecnologías de HTML y CSS, este proyecto es un juego de Memoria. Fue uno de los primeros proyectos desarrollados por mi persona.</p>
              <a className="button1" href="https://juanelcaballo.club/20591/Lab06/Memoria.html" target="_blank" rel="noreferrer">Ver Sitio</a>
            </div>
            <div className="card">
              <img src={Ele} alt="user1" />
              <h1 className="Titulo">Proyecto Copa de Pagina Web</h1>
              <p>Para este proyecto se desarrolló la copia de una página web, esta página se desarrolla principalmente con React, al igual que usando varias tecnologías cómo Babel, Webpack, etc.</p>
              <a className="button1" href="https://elevationworship-copy-page.netlify.app/" target="_blank" rel="noreferrer">Ver Sitio</a>

            </div>
            <div className="card">
              <img src={Calc} alt="user1" />
              <h1 className="Titulo">Proyecto Calculadora</h1>
              <p>Este proyecto fue desarrollado con la herramienta de Create React App con la cual se crea un ambiente de trabajo de React, se trabajo en una calculadora funcional, al igual que fue estetica.</p>
              <a className="button1" href="https://juanelcaballo.club/20591/build/index.html" target="_blank" rel="noreferrer">Ver Sitio</a>
            </div>
            <div className="card">
              <img src={lab} alt="user1" />
              <h1 className="Titulo">Proyecto Laberinto</h1>
              <p>Este proyecto fue desarrollado con elementos de React, al igual que con varias herramientas como babel y Webpack, Este es un juego de un laberiento el cual puede ser expandido segun escoga el usuario.</p>
              <a className="button1" href="https://juanelcaballo.club/20591/Laberinto/dist/index.html" target="_blank" rel="noreferrer">Ver Sitio</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
