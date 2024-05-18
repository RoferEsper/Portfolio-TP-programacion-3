import "../css/Header.css";
import logo2 from "../assets/logo2.png";
import icono from "../assets/icono.svg";
const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img className="logo" src={logo2} width={110} height={100} />
        </div>
        <div className="datosHeader">
          <h3>UTN - TECNICATURA UNIVERSITARIA EN PROGRAMACION</h3>
          <br />
          <h4>Esper Rodrigo Fernando</h4>
        </div>
        <div className="iconoHeader">
          <img className="iconodev" src={icono} width={80} />
        </div>
      </header>
      <hr className="linea" />
    </div>
  );
};

export default Header;
