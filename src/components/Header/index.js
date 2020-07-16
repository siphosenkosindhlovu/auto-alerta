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
import Banner from 'components/Banner';

export default function TopNav() {
    const { store } = useContext(Context);
    return (
        <header
            style={{
                position: 'sticky',
                top: '0',
                backgroundColor: 'white',
                zIndex: '2000',
            }}
        >
            <Navbar expand="xl" className="container">
                <div className="navbar-header">
                    <NavbarToggle />
                    <NavbarBrand as={'div'}>
                        <Link to="/">
                            <Logo variant="header" />
                        </Link>
                    </NavbarBrand>
                </div>
                <NavbarCollapse className="justify-content-end">
                    <Nav>
                        <NavLink
                            activeClassName="active"
                            as={Link}
                            to="/"
                            exact
                        >
                            Inicio
                        </NavLink>
                        {store.currentUser && (
                            <NavLink
                                activeClassName="active"
                                as={Link}
                                to="/configuracion"
                            >
                                Configuracion
                            </NavLink>
                        )}
                        <NavLink
                            activeClassName="active"
                            as={Link}
                            to="/registro"
                        >
                            Registrate
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            as={Link}
                            to="/notificar"
                        >
                            Informa Aquí
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            as={Link}
                            to="/contacto"
                        >
                            Contacto
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            <Banner>
                ¿Tienes dudas de cómo funciona? Haz click <a href="/">AQUÍ</a>
            </Banner>
        </header>
    );
}
