import { useState } from 'react';
import '../estilos/navegacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../imagenes/logo.png';

export default function Navegacion() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div id="logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="botton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio">Presentación</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#certificaciones">Certificaciones</a></li>
        </ul>
      </nav>
    </header>
  );
}
