import React from 'react'
import "../estilos/contacto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contacto() {
  return (
    <div id='contacto'>
      <h2>Contacto</h2>
      <section className="seccion">
          <div id='texto'>
            <p>Si tienes un proyecto o idea en la que crees que podría aportar valor, te invito a ponerte en contacto. Estoy disponible para explorar cómo podemos trabajar juntos y transformar tu visión en realidad. No dudes en conectar conmigo a través de las redes sociales.</p>
          </div>
          <div id="redes">
            <div className='iconos'>
              <FontAwesomeIcon icon={faEnvelope} className='fa-icon'/>
              <a href="mailto:matiasnicolas.villan@gmail.com?Subject=Consulta%20de%20Servicio">Mail</a>
            </div>
            <div className='iconos'>
              <FontAwesomeIcon icon={faLinkedin} className='fa-icon'/>
              <a href="https://www.linkedin.com/in/matias-nicolas-villan/">Linkedin</a>
            </div>
            <div className='iconos'>
              <FontAwesomeIcon icon={faGithub} className='fa-icon'/>
              <a href="https://github.com/MatiasKV0">GitHub</a>
            </div>
          </div>
      </section>
    </div>
  )
}
export default Contacto