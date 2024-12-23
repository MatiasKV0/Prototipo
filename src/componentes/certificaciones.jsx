import React from 'react'
import "../estilos/certificaciones.css"

function Certificaciones() {
    return (
        <article id="certificaciones">
            <section className="seccion">
            <h2>Educación</h2>
                <div className="certificaciones__contenedor">
                    <div className="certificaciones__curso">
                        <p>Loremipsum dolorsit</p>
                        <a style={{cursor:'text'}}>Loremipsum dolorsit</a>
                    </div>
                    <div className="certificaciones__curso">
                        <p>Loremipsum dolorsit</p>
                        <a style={{cursor:'text'}}>Loremipsum dolorsit</a>
                    </div>
                </div>
                <h2>Certificaciones</h2>
                <div className="certificaciones__contenedor">
                    <div className="certificaciones__curso">
                        <p>Loremipsum dolorsit</p>
                        <a href="#inicio">Certificado de Aprobacion de "Loremipsum dolorsit"</a>
                    </div>
                    <div className="certificaciones__curso">
                        <p>Loremipsum dolorsit</p>
                        <a href="#inicio">Certificado de Aprobacion de "Loremipsum dolorsit"</a>
                    </div>
                    <div className="certificaciones__curso">
                        <p>Loremipsum dolorsit</p>
                        <a href="#inicio">Certificado de Aprobacion de "Loremipsum dolorsit"</a>
                    </div>
                    <div className="certificaciones__curso">
                        <p>Loremipsum dolorsit</p>
                        <a href="#inicio">Certificado de Aprobacion de "Loremipsum dolorsit"</a>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Certificaciones