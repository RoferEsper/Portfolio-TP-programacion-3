import "../css/Main.css";
import persona from '../images/persona.png'
const Main = () => {
  return (
    <div className="contenedor">
      <div className="datosPersonales">
        <img src={persona} width={420} />
        <h2>Nombre y apellido + datos personales</h2>
      </div>
      <div className="contenedorSkills">
          <div className="skills">
            
          </div>
      </div>
    </div>
  );
};

export default Main;
