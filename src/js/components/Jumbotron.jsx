import React from 'react';

const Jumbotron = () => {
    return (
        // La clase 'hero-section' se usa para añadir el fondo oscuro y el efecto glow con CSS
        <section id="jumbotron" className="hero-section text-white text-center py-5">
            <div className="container py-5">
                
                {/* Etiqueta superior */}
                <span className="badge text-white border border-secondary p-2 rounded-pill mb-4">
                    Desarrollo Web & Soluciones IA
                </span>
                
                {/* Título Principal (con cambio de color) */}
                <h1 className="display-2 fw-bold mb-4">
                    Transformo Ideas en <span className="text-info">Soluciones Digitales</span>
                </h1>
                
                {/* Párrafo Descriptivo */}
                <p className="lead col-lg-8 mx-auto mb-5 text-secondary">
                    Desarrollo sitios web profesionales, gestiono redes sociales y 
                    creo automatizaciones con IA para impulsar tu negocio al 
                    siguiente nivel
                </p>
                
                {/* Botones CTA */}
                <div className="d-flex justify-content-center gap-3 mb-5">
                    
                    {/* Botón 1: Relleno (principal) */}
                    <a href="#servicios" className="btn btn-info btn-lg fw-bold px-4">
                       Servicios
                    </a>
                    
                    {/* Botón 2: Outline (secundario) */}
                    <a href="#contacto" className="btn btn-outline-light btn-lg px-4">Contacto
                    </a>
                </div>

                {/* Etiquetas de Servicios inferiores */}
                <div className="d-flex justify-content-center gap-4 small text-secondary">
                    <ServiceTag label="Desarrollo Web" color="bg-success" />
                    <ServiceTag label="Gestión de Redes Sociales" color="bg-success" />
                    <ServiceTag label="Automatización IA" color="bg-success" />
                    <ServiceTag label="Hosting & Correos" color="bg-success" />
                </div>

            </div>
        </section>
    );
};

export default Jumbotron;

// Componente auxiliar para las etiquetas con punto de color
const ServiceTag = ({ label, color }) => (
    <span>
        <span className={`color-dot rounded-circle ${color} me-1`}></span> 
        {label}
    </span>
);