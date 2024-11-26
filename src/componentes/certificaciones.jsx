import React from 'react'
import "../estilos/certificaciones.css"

function Certificaciones() {
  return (
    <article id="Certificaciones">
        <section className="seccion">
        <h2>Educación</h2>
            <div id="cursos">
                <div className="curso">
                    <p>Universidad Nacional de La Matanza</p>
                    <a style={{cursor:'text'}}>Ingeniero Informatico</a>
                </div>
                <div className="curso">
                    <p>E.E.S.T N°4 I BRIGADA AEREA</p>
                    <a style={{cursor:'text'}}>Tecnico Mecanico Aeronautico</a>
                </div>
            </div>
            <h2>Certificaciones</h2>
            <div id="cursos">
                <div className="curso">
                    <p>Web Development</p>
                    <a href="https://www.sololearn.com/es/certificates/CC-52MBRF1L">Certificado de Aprobacion de "Sololearn"</a>
                </div>
                <div className="curso">
                    <p>Desarrollo Web</p>
                    <a href="https://drive.google.com/file/d/1B-cr5thXj3Q9yC3kAvMAc5VCDke71As9/view?pli=1">Certificado de Aprobacion de "Junior"</a>
                </div>
                <div className="curso">
                    <p>Agile Explorer</p>
                    <a href="https://www.credly.com/badges/c2797dd1-8db2-4c4f-9a5b-c01e3ca4d4c6/public_url">Certificado de Aprobacion de "IBM"</a>
                </div>
                <div className="curso">
                    <p>English Certificate</p>
                    <a href="https://cert.efset.org/E6Uy6v">Certificado de Aprobacion de "EF SET"</a>
                </div>
            </div>
        </section>
    </article>
  )
}

export default Certificaciones