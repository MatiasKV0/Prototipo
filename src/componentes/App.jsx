import {useState} from 'react'
import '../estilos/app.css'
import Presentacion from './presentacion';
import Contacto from './contacto';
import Habilidades from './habilidades';
import Certificaciones from './certificaciones';

export default function App() {
  const [activeComponent, setActiveComponent] = useState('presentacion');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'presentacion':
        return <Presentacion />;
      case 'contacto':
        return <Contacto />;
      case 'habilidades':
        return <Habilidades />;
      case 'certificaciones':
        return <Certificaciones />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <a onClick={() => setActiveComponent('presentacion')}>Inicio</a>
        <a onClick={() => setActiveComponent('habilidades')}>Sobre Mi</a>
        <a onClick={() => setActiveComponent('certificaciones')}>Certificaciones</a>
        <a onClick={() => setActiveComponent('contacto')}>Contacto</a>

      </nav>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
}