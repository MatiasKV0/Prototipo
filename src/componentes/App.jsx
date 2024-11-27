import {useState} from 'react'
import '../estilos/app.css'
import Presentacion from './presentacion';
import Contacto from './contacto';
import Habilidades from './habilidades';
import Certificaciones from './certificaciones';
import Navegacion from './navegacion';

export default function App() {
  return (
    <div>
      <Navegacion />
      <Presentacion />
      <Habilidades />
      <Certificaciones />
      <Contacto />
    </div>
  );
}