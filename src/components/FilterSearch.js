import React from 'react';
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export function FilterSearchHeader({ children }) {
  return (
    <div className="filter-search__header filter-form__header--mobile bg-primary align-self-center">
      {children}
    </div>
  );
}

export default function FilterSearch() {
  return (
    <section class="filter-search__wrapper py-3 py-lg-5 bg-light">
      <Container>
        <Form>
          <Row className="align-items-end justify-content-center mx-auto">
            <Col lg={2}>
              <FormGroup>
                <FilterSearchHeader>Informar</FilterSearchHeader>
              </FormGroup>
            </Col>
            <Col lg={3}>
              <FormGroup controlId="patente">
                <FormLabel>Nº Patente</FormLabel>
                <FormControl placeholder="VSRE23" />
              </FormGroup>
            </Col>
            <Col lg={3}>
              <FormGroup controlId="patente">
                <FormLabel>Mensaje</FormLabel>
                <FormControl placeholder="Reportar robo" />
              </FormGroup>
            </Col>
            <Col lg={3}>
              <FormGroup controlId="patente">
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl placeholder="Ingresa tu correo" />
              </FormGroup>
            </Col>
            <Col lg={1}>
              <FormGroup>
                <Button type="submit">Enviar</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row lg={{ offset: 3 }}>
            <FormText>
              Antes de notificar al destinatario, verificaremos que tu correo
              sea válido.
            </FormText>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
