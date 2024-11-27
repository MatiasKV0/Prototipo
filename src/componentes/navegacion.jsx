import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navegacion() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
        <div><FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} /></div>
        <ul className={menuOpen ? 'active' : ''}>
            <li><a href="#inicio">Presentacion</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#certificaciones">Certificaciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
  );
}
