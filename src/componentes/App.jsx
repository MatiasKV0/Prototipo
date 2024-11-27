import {useState} from 'react'
import '../estilos/app.css'
import Presentacion from './presentacion';
import Contacto from './contacto';
import Habilidades from './habilidades';
import Certificaciones from './certificaciones';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#presentacion">Presentacion</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#certificaciones">Certificaciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <Presentacion />
      <Habilidades />
      <Certificaciones />
      <Contacto />
    </div>
  );
}