import { useState, useEffect } from 'react';
import '../estilos/navegacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from '../imagenes/logo.png';

export default function Navegacion() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <header className="header">
      <div id="logo">
        <img id="M-logo" src={Logo} alt="Logo"/>
      </div>
      <div className="botton" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className='fa-icon'/>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio">Presentación</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#certificaciones">Certificaciones</a></li>
          <li>
            <button
              className={`switch ${darkMode ? 'active' : ''}`}
              id="switch"
              onClick={toggleDarkMode}
            >
              <span><FontAwesomeIcon icon={faSun} /></span>
              <span><FontAwesomeIcon icon={faMoon} /></span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
