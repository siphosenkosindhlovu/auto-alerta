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
import alertCircle from 'images/ic-alerta_Mesa de trabajo 1.svg';
import Modal from 'components/BaseModal';
import useModal from 'hooks/useModal';

export function FilterSearchHeader({ children, desktop }) {
  let classNames = 'filter-search__header bg-primary align-self-center';
  if (!desktop) classNames += ' d-xl-none';
  if (desktop) classNames += ' filter-search__header--desktop';
  return <div className={classNames}>{children}</div>;
}

export default function FilterSearch() {
  const { isShown, show: showModal, hide } = useModal();
  return (
    <section
      class="filter-search__wrapper pt-0 pb-3 py-xl-5"
      style={{ backgroundColor: '#e5e5e5' }}
    >
      {' '}
      <FilterSearchHeader>
        Informar
        <div className="filter-search__arrow-container"></div>
      </FilterSearchHeader>
      <Container>
        <Form>
          <Row className="align-items-end mx-auto">
            <Col xl={2} className="d-none d-xl-block">
              <FormGroup>
                <FilterSearchHeader desktop>Informar</FilterSearchHeader>
              </FormGroup>
            </Col>
            <Col lg={2}>
              <FormGroup controlId="patente">
                <FormLabel>Nº Patente</FormLabel>
                <FormControl
                  className="filter-search__input"
                  placeholder="VSRE23"
                />
              </FormGroup>
            </Col>
            <Col lg={5} xl={4}>
              <FormGroup controlId="patente">
                <FormLabel>Mensaje</FormLabel>
                <FormControl
                  className="filter-search__input"
                  placeholder="Reportar robo"
                />
              </FormGroup>
            </Col>
            <Col lg={3} className="filter-search__input--bordered">
              <FormGroup controlId="patente">
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl
                  className="filter-search__input"
                  placeholder="Ingresa tu correo"
                />
              </FormGroup>
            </Col>
            <FormGroup className="text-center col-lg">
              <Button
                className="filter-search__input filter-search__input--submit"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  showModal();
                }}
              >
                Enviar
              </Button>
            </FormGroup>
          </Row>
          <Row className="mx-0">
            <Col lg={{ offset: 2 }}>
              <FormGroup>
                <FormText className="d-flex">
                  <img
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      marginRight: '0.6rem',
                    }}
                    src={alertCircle}
                    alt="Alert"
                  />{' '}
                  <div>
                    Antes de notificar al destinatario, verificaremos que tu
                    correo sea válido.
                  </div>
                </FormText>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
      <Modal
        title="ALERTA RECIBIDA"
        dismissButtonText="Aceptar"
        show={isShown}
        handleClose={hide}
      >
        Hemos recibido la información ingresada. Una vez que validemos tu correo
        notificaremos al dueño del vehículo. Gracias por ser parte de nuestra
        comunidad.
      </Modal>
    </section>
  );
}
