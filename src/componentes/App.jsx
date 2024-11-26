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
      </nav>
      <div>
        <Presentacion />
        <Habilidades />
        <Certificaciones />
        <Contacto />
      </div>
    </div>
  );
}