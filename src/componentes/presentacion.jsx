import React from 'react'
import "../estilos/presentacion.css"
import Texto from './textoEfecto'

function Presentacion() {
  return (
<div className='Fondo'>
      <div className='Info'>
        <h2>I`m a {""}<Texto palabras={["Computer Engineer","Web Developer","Industrial Designer"]} /></h2> 
        <h1>Matias Villan</h1>
          <div className='divredes'>
                <a className="redes" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/matias-nicolas-villan/">
                    <h4>Linkedin</h4>
                </a>
                <a className="redes" style={{ textDecoration: 'none' }} href="https://github.com/MatiasKV0">
                    <h4 style={{padding:"10px 45px"}}> GitHub </h4>
                </a>
          </div>
      </div>
    </div>
  )
}

export default Presentacion