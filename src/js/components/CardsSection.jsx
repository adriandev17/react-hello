import React from 'react'
import Card from "./Card.jsx";

const datosServicios = [
    {
        id: 1,
        titulo: 'Diseño y Desarrollo Web',
        parrafo: 'Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.',
        lista: [
            'Diseño UI/UX profesional',
            'Desarrollo responsive',
            'Optimización SEO',
            'E-commerce y websites',
        ],
        botonTexto: 'Más información →',
    },
    {
        id: 2,
        titulo: 'Gestión de Redes Sociales',
        parrafo: 'Impulsa tu presencia digital con estrategias de contenido efectivas y engagement real.',
        lista: [
            'Estrategia de contenido',
            'Gestión de comunidad',
            'Análisis de métricas',
            'Diseño de publicaciones',
        ],
        botonTexto: 'Más información →',
    },
    {
        id: 3,
        titulo: 'Agentes & Automatizaciones IA',
        parrafo: 'Automatiza procesos y mejora la eficiencia con soluciones de inteligencia artificial.',
        lista: [
            'Chatbots inteligentes',
            'Automatización de tareas',
            'Análisis de datos con IA',
            'Asistentes personalizados',
        ],
        botonTexto: 'Más información →',
    },
    {
        id: 4,
        titulo: 'Hosting & Correos Corporativos',
        parrafo: 'Infraestructura confiable y profesional para tu negocio con soporte técnico incluido.',
        lista: [
            'Hosting de alta velocidad',
            'Correos corporativos',
            'SSL y seguridad avanzada',
            'Backups automáticos',
        ],
        botonTexto: 'Más información →',
    }
];

const CardsSection = () => {
    return (
        <section id="servicios" className="bg-dark text-white py-5 section-services">
            <div className="container py-5">
                
                <header className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">
                        Servicios <span className="text-info">Profesionales</span>
                    </h2>
                    <p className="lead text-secondary">
                        Soluciones digitales completas para llevar tu negocio al siguiente nivel
                    </p>
                </header>

                <div className="row g-4">
                    {datosServicios.map((servicio) => (
                        <div key={servicio.id} className="col-lg-3 col-md-6"> 
                            <Card 
                                titulo={servicio.titulo}
                                parrafo={servicio.parrafo}
                                lista={servicio.lista}
                                botonTexto={servicio.botonTexto}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
