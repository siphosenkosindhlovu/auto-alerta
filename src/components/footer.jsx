import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import checkCircle from 'images/check-VB_Mesa de trabajo 1.svg';

export default function Footer() {
  const navItems = [
    'Página de inicio',
    'Términos y condiciones',
    'Preguntas Frecuentes',
    'Contáctanos',
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={6} lg={4}>
            <Logo variant="footer" />
          </Col>
          <Col xs={6} lg={4}>
            <Nav variant="dark" as="ul">
              <NavItem as="li">
                {navItems.map((item) => (
                  <Link component={NavLink} to="/pagnai">
                    {item}
                  </Link>
                ))}
              </NavItem>
            </Nav>
          </Col>
          <Col xs={12} lg={4}>
            <Form>
              <FormGroup>
                <FormLabel style={{ fontSize: '13px' }}>
                  Inscríbete a nuestras noticias
                </FormLabel>
                <InputGroup>
                  <FormControl type="email" placeholder="Ingresa tu email" />
                  <InputGroup.Append>
                    <Button type="submit">Enviar</Button>
                  </InputGroup.Append>
                </InputGroup>
                <FormText className="text-primary">
                  <img
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                    }}
                    src={checkCircle}
                    alt="Checkmark"
                  />{' '}
                  ¡Email registrado con éxito!
                </FormText>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {/* <div id="developer" className="pull-right">
          <a
            href="http://www.andrés.cl/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="images/andrés.png" alt="andres" />
          </a>
        </div>
        <div id="copy" className="pull-left">
          <a href="/#"> Auto Alerta </a> &copy;2019
        </div>
        <div id="nav-footer">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">
                <i className="fa fa-home"></i> Inicio
              </Link>
            </li>
            <li className="">
              <Link to="/terminos">
                <i className="fa fa-exclamation-triangle"></i> Términos y
                Condiciones
              </Link>
            </li>
            <li className="">
              <Link to="/preguntas-frecuentes">
                <i className="fa fa-question-circle"></i> Preguntas Frecuentes
              </Link>
            </li>
            <li className="">
              <Link to="/contacto">
                <i className="fa fa-envelope"></i> Contacto
              </Link>
            </li>
          </ul>
        </div> */}
      </Container>
    </footer>
  );
}
