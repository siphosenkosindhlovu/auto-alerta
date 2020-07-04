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

export function FilterSearchHeader({ children, desktop }) {
  let classNames = 'filter-search__header bg-primary align-self-center';
  if (desktop) classNames += ' filter-search__header--desktop';
  return <div className={classNames}>{children}</div>;
}

export default function FilterSearch() {
  return (
    <section
      class="filter-search__wrapper pt-0 pb-3 py-lg-5"
      style={{ backgroundColor: '#e5e5e5' }}
    >
      {' '}
      <FilterSearchHeader className="d-lg-none">
        Informar
        <div className="filter-search__arrow-container"></div>
      </FilterSearchHeader>
      <Container>
        <Form>
          <Row className="align-items-end justify-content-center mx-auto">
            <Col lg={2} className="d-none d-lg-block">
              <FormGroup>
                <FilterSearchHeader desktop>Informar</FilterSearchHeader>
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
          <Row>
            <Col lg={{ offset: 2 }}>
              <FormText>
                Antes de notificar al destinatario, verificaremos que tu correo
                sea válido.
              </FormText>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
