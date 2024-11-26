import React from 'react'
import "../estilos/habilidades.css"

function Habilidades() {
  return (
    <article id="skills">
        <section className="seccion">
            <h2 style={{marginTop:"10px",marginBottom:"5px"}}>Sobre Mi</h2>
            <p id="sobremi">Soy una persona apasionada por la tecnología, siempre en busca de desafíos que me permitan expandir mis conocimientos y desarrollar nuevas habilidades. Me motiva la idea de superar obstáculos, ya que cada uno representa una oportunidad para aprender y crecer tanto personal como profesionalmente. </p>
        </section>
        <section className="seccion">
            <h2>Habilidades</h2>
            <div id="conHab">
                <div className="habilidades">
                    <p>HTML</p>
                </div>
                <div className="habilidades">
                    <p>CSS</p>
                </div>
                <div className="habilidades">
                    <p>JavaScript</p>
                </div>
                <div className="habilidades">
                    <p>React</p>
                </div>
                <div className="habilidades">
                    <p>SQL</p>
                </div>
                <div className="habilidades">
                    <p>Python</p>
                </div>
                <div className="habilidades">
                    <p>C</p>
                </div>
                <div className="habilidades">
                    <p>C++</p>
                </div>
                <div className="habilidades">
                    <p>Java</p>
                </div>
                <div className="habilidades">
                    <p>AutoCad</p>
                </div>
                <div className="habilidades">
                    <p>Fusion 360</p>
                </div>
                <div className="habilidades">
                    <p>Power BI</p>
                </div>
            </div>
        </section>
    </article>
  )
}

export default Habilidades