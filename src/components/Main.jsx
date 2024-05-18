import "../css/Main.css";
import persona from "../assets/persona.png";
import csharp from "../assets/csharp.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import mysql from "../assets/mysql.svg";
import nodejs from "../assets/nodejs.svg";
import css from "../assets/css.svg";
import html5 from "../assets/html5.svg";
import mongodb from "../assets/mongodb.svg";
import sqlserver from "../assets/sql-server.svg";
import proyectopeli from '../assets/proyectopeli.jpg'
import proyectofarma from '../assets/proyectofarma.jpg'
import proyectoPortfolio from '../assets/proyectoPortfolio.jpg'

const Main = () => {
  const datosPersonales = {
    nombre: "Rodrigo",
    apellido: "Esper",
    edad: 29,
    hobby: "Ciclismo",
    actividad: "Estudiante Universitario en Programación",
  };

  return (
    <div>
      <div className="contenedor">
        <div className="datosPersonales">
          <img src={persona} width={420} />
          <h3>
            {datosPersonales.nombre} {datosPersonales.apellido}
          </h3>
          <h3>Edad {datosPersonales.edad} años</h3>
          <h3>Mi hooby favorito es el {datosPersonales.hobby}</h3>
          <h3>Actualmente soy {datosPersonales.actividad}</h3>
        </div>
        <div className="contenedorSkills">
          <h2>Mis skills</h2>
          <div className="skillsflex">
            <div className="skills1">
              <img src={csharp} width={80} />
              <br />
              <br />
              <img src={javascript} width={80} />
              <br />
              <br />
              <img src={react} width={80} />
              <br />
              <br />
              <img src={mysql} width={80} />
              <br />
              <br />
              <img src={nodejs} width={80} />
              <br />
            </div>
            <div className="skills2">
              <img src={mongodb} width={150} />
              <br />
              <br />
              <img src={sqlserver} width={80} />
              <br />
              <br />
              <img src={html5} width={80} />
              <br />
              <br />
              <img src={css} width={80} />
              <br />
            </div>
          </div>
        </div>
      </div>
      <h3 className="tituloProyecto">Mis proyectos</h3>
      <div className="carrusel">
        <div className="card1">
        <a href="https://github.com/RoferEsper/ProyectoWebPeliculas" target="_blank" ><img  src={proyectopeli}   /></a>
          
        </div>
        <div className="card2">
        <a href="https://github.com/RoferEsper/ProyectoHotelConWindowsFroms" target="_blank"><img  src={proyectofarma}   /></a>
        </div>
        <div className="card3">
        <a href="https://github.com/RoferEsper/Portfolio-TP-programacion-3" target="_blank" ><img  src={proyectoPortfolio}   /></a>
        
        </div>
      </div>
    </div>
  );
};

export default Main;
