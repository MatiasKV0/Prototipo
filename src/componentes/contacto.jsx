import React from 'react'
import "../estilos/contacto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contacto() {
  return (
<footer className="footer">
      <section className="seccion">
        <div className="contacto">
          <div className="contacto-info">
          <FontAwesomeIcon icon={faEnvelope} className='fa-icon'/> 
            <h4><a className="contacto-link" href="...">Contacto</a>
            </h4>
          </div>
          <h4>Developed by Matias Villan</h4>
        </div>
        <div id="redes" className="redes">
          <a href="...">
          <FontAwesomeIcon icon={ faLinkedin } className='fa-icon'/>
          </a>
          <a href="...">
          <FontAwesomeIcon icon={faGithub} className='fa-icon'/>
          </a>
        </div>
      </section>
    </footer>
  )
}
export default Contacto