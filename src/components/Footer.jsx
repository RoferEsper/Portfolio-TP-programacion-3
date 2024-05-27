import "../css/Footer.css"
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
const Footer = () => {
  return (
    <div>
      <hr />
    <div className="ContenedorFooter">
       <div className="ContenedorRedes">
          <div className="redes"><a href="https://www.facebook.com/Rofer94" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" width={80}/></a></div>
          <div className="redes"><a href="https://github.com/RoferEsper" target="_blank" rel="noopener noreferrer"><img src={github} alt="" width={80}/></a></div>
          <div className="redes"><a href="https://www.instagram.com/rodrigoesper94/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" width={80}/></a></div>
          <div className="redes"><a href="https://www.linkedin.com/in/rodrigo-esper-dev/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" width={80}/></a></div>
         
       </div>
    </div>
    <hr />
    <div className="derechos">
      <h5>Derechos Reservados Esper Rodrigo</h5>
    </div>
    </div>
  )
}

export default Footer
