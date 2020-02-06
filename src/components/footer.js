import React from 'react';
import { Link } from 'react-router-dom';


const Footer = props => {
    return (
        <footer>
            <div className="container">
                <div id="developer" className="pull-right">
                    <a href="http://www.andrés.cl/" rel="noopener noreferrer" target="_blank"><img src="images/andrés.png" alt="andres" /></a>
                </div>
                <div id="copy" className="pull-left">
                <a href="/#"> Auto Alerta </a> &copy;2019</div>
                <div id="nav-footer">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/"><i className="fa fa-home"></i> Inicio</Link></li>
                        <li className=""><Link to="/terminos"><i className="fa fa-exclamation-triangle"></i> Términos y Condiciones</Link></li>
                        <li className=""><Link to="/preguntas-frecuentes"><i className="fa fa-question-circle"></i> Preguntas Frecuentes</Link></li>
                        <li className=""><Link to="/contacto"><i className="fa fa-envelope"></i> Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;