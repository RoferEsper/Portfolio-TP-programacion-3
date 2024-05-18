import '../css/Header.css'
import logo2 from '../images/logo2.png'
import icono from '../images/icono.svg'
const Header = () => {
  return (
    <div>
    <header>
        <img className='logo' src={logo2} width={110} height={100}/>
        <h1>Portfolio</h1>
        <img className='iconodev' src={icono} width={80} />
    </header>
      <hr className="linea" />
    </div>
  )
}

export default Header
