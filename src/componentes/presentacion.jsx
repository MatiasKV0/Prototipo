import React from 'react'
import "../estilos/presentacion.css"
import Texto from './textoEfecto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'

function Presentacion() {
  return (
<div id="inicio" className='Presentacion'>
      <div className='Presentacion__Info'>
        <h2>I`m a {""}<Texto palabras={["Computer Engineer","Web Developer","Industrial Designer"]} /></h2> 
        <h1>Matias Villan</h1>
          <div className='Presentacion__Redes'>
                <a className="Presentacion__Redes-Link" style={{ textDecoration: 'none' }} href="#inicio">
                    <h4>Linkedin</h4>
                </a>
                <a className="Presentacion__Redes-Link" style={{ textDecoration: 'none' }} href="#inicio">
                    <h4 style={{padding:"10px 45px"}}> GitHub </h4>
                </a>
          </div>
      </div>
      <div className="Presentacion__Icon">
        <FontAwesomeIcon icon={faAnglesDown} className='fa-icon'/>
      </div>
  </div>
  )
}

export default Presentacion