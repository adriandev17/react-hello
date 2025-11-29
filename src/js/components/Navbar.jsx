import React from 'react';

const Navbar = () => {
  return (

    <nav className="navbar navbar-dark bg-dark fixed-top">

      <div className="container-fluid">
        <a className="navbar-brand" href="#">adrianDev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">adrianDev</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#jumbotron">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#acerca-de-mi">Acerca de mi</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Diseño y Desarrollo Web</a></li>
                  <li><a className="dropdown-item" href="#">Gestión de Redes Sociales</a></li>
                  <li><a className="dropdown-item" href="#">Agentes y Automatizaciones IA</a></li>
                  <li><a className="dropdown-item" href="#">Hosting y Correos Corporativos</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex mt-3">
              <button className="btn btn-success" type="button">Contacto</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar