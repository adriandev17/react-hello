import React from 'react';

const Card = ({ titulo, parrafo, lista, botonTexto }) => {
    
    return (
        <div className="card h-100 dark-card border-0 p-3"> 
            <div className="card-body">
                
                <h5 className="card-title fw-bold text-white mb-3">{titulo}</h5>
                
                <p className="card-text text-secondary mb-4">{parrafo}</p>
                
                <ul className="list-unstyled card-list mb-4">
                    {lista && lista.map((item, index) => (
                        <li key={index} className="text-secondary small mb-1">
                            <i className="bi-dot me-1 text-info"></i> 
                            {item}
                        </li>
                    ))}
                </ul>

                <a className="btn-link text-info text-decoration-none fw-bold">
                    {botonTexto}
                </a>

            </div>
        </div>
    );
};

export default Card;