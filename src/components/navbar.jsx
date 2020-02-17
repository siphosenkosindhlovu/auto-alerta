import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Navbar = props => {
    const { store } = useContext(Context);
    return (
        <header>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img className="img-logo" src={require("./../images/icono_nuevo.png")} alt="logo" /> Auto Alerta
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {
                                !store.currentUser ?
                                    (
                                        <li className="btn-login "><Link to="/login"><i className="fa fa-key"></i> Iniciar Sesión</Link></li>
                                    ) : (
                                        <li className=""><Link to="/configuracion"><i className="fa fa-cogs"></i> Configuracion</Link></li>
                                    )
                            }
                            <li className="reverse"><Link to="/registro"><i className="fa fa-pencil-square-o"></i> Registrarse</Link></li>
                            <li className=""><Link to="/notificar"><i className="fa fa-bell-o"></i> Notificar</Link></li>
                            <li className=""><Link to="/contacto"><i className="fa fa-envelope"></i> Contacto</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;