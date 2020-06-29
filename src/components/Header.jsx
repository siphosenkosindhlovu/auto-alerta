import React, { useContext } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Context } from 'store/appContext';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Logo from 'components/Logo';

export default function TopNav() {
  const { store } = useContext(Context);
  return (
    <header>
      <Navbar expand="xl" className="container">
        <div class="navbar-header">
          <NavbarToggle />
          <Link component={NavbarBrand} to="/">
            <Logo variant="header" />
          </Link>
        </div>
        <NavbarCollapse className="justify-content-end">
          <Nav>
            <Link activeClassName="active" component={NavLink} to="/">
              Inicio
            </Link>
            {store.currentUser && (
              <Link
                activeClassName="active"
                component={NavLink}
                to="/configuracion"
              >
                Configuracion
              </Link>
            )}
            <Link activeClassName="active" component={NavLink} to="/registro">
              Registrate
            </Link>
            <Link activeClassName="active" component={NavLink} to="/notificar">
              Informa Aquí
            </Link>
            <Link activeClassName="active" component={NavLink} to="/contacto">
              Contacto
            </Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
