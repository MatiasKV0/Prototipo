import React from "react"
import "../estilos/proyectos.css"
import logo from "../imagenes/Logo.png"


export default function Proyectos(){
    return (
        <article id="proyectos">
            <section className="seccion">
            <h2>Proyectos</h2>
                <div className="proyectos_contenedor">
                    
                    <div className="proyectos_contenedor_vinculo">
                        <img src="https://placehold.co/400x200" alt="Logo" />
                        <button onClick={() => window.open("https://matiaskv0.github.io/Prototipo/", "_blank", "noopener,noreferrer")}>
                            Visitar proyecto
                        </button>
                    </div>
                    <div>
                    <h3>Nombre proyecto</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed omnis iste, fugiat enim beatae est, incidunt possimus pariatur corporis voluptatum sint adipisci, facere quod unde totam ea ducimus nihil!</p>
                    <div className="contenedor_herramientas"><span className="herramientas">React</span><span className="herramientas">Vite</span></div>
                    </div>
                </div>
                <div className="proyectos_contenedor inverso">
                    <div>
                    <h3>Nombre proyecto</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed omnis iste, fugiat enim beatae est, incidunt possimus pariatur corporis voluptatum sint adipisci, facere quod unde totam ea ducimus nihil!</p>
                    <div className="contenedor_herramientas"><span className="herramientas">JavaScript</span><span className="herramientas">Vite</span></div>
                    </div>
                    <div className="proyectos_contenedor_vinculo">
                        <img src="https://placehold.co/400x200" alt="Logo" />
                        <button onClick={() => window.open("https://matiaskv0.github.io/Prototipo/", "_blank", "noopener,noreferrer")}>
                            Visitar proyecto
                        </button>
                    </div>
                </div>
                <div className="proyectos_contenedor">
                    
                    <div className="proyectos_contenedor_vinculo">
                        <img src="https://placehold.co/400x200" alt="Logo" />
                        <button onClick={() => window.open("https://matiaskv0.github.io/Prototipo/", "_blank", "noopener,noreferrer")}>
                            Visitar proyecto
                        </button>
                    </div>
                    <div>
                    <h3>Nombre proyecto</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed omnis iste, fugiat enim beatae est, incidunt possimus pariatur corporis voluptatum sint adipisci, facere quod unde totam ea ducimus nihil!</p>
                    <div className="contenedor_herramientas"><span className="herramientas">React</span><span className="herramientas">Vite</span></div>
                    </div>
                </div>
            </section>
        </article>
        
    );
}