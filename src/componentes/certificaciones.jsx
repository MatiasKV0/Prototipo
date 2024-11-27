import React from 'react'
import "../estilos/certificaciones.css"

function Certificaciones() {
  return (
    <article id="certificaciones">
        <section className="seccion">
        <h2>Educación</h2>
            <div className="certificaciones__contenedor">
                <div className="certificaciones__curso">
                    <p>Universidad Nacional de La Matanza</p>
                    <a style={{cursor:'text'}}>Ingeniero Informatico</a>
                </div>
                <div className="certificaciones__curso">
                    <p>E.E.S.T N°4 I BRIGADA AEREA</p>
                    <a style={{cursor:'text'}}>Tecnico Mecanico Aeronautico</a>
                </div>
            </div>
            <h2>Certificaciones</h2>
            <div className="certificaciones__contenedor">
                <div className="certificaciones__curso">
                    <p>Web Development</p>
                    <a href="https://www.sololearn.com/es/certificates/CC-52MBRF1L">Certificado de Aprobacion de "Sololearn"</a>
                </div>
                <div className="certificaciones__curso">
                    <p>Bases de Datos - SQL y MySQL</p>
                    <a href="https://www.udemy.com/certificate/UC-63192758-05cc-46aa-aa5c-bf05e2a9429f/">Certificado de Aprobacion de "Udemy"</a>
                </div>
                <div className="certificaciones__curso">
                    <p>Agile Explorer</p>
                    <a href="https://www.credly.com/badges/c2797dd1-8db2-4c4f-9a5b-c01e3ca4d4c6/public_url">Certificado de Aprobacion de "IBM"</a>
                </div>
                <div className="certificaciones__curso">
                    <p>English Certificate</p>
                    <a href="https://cert.efset.org/E6Uy6v">Certificado de Aprobacion de "EF SET"</a>
                </div>
            </div>
        </section>
    </article>
  )
}

export default Certificaciones