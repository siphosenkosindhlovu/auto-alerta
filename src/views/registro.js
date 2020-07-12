import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';
import Layout from 'components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Figure from 'react-bootstrap/Figure';
import useModal from 'hooks/useModal';
import moto from 'images/moto.png';
import Modal from 'components/BaseModal';

const Registro = (props) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    const {
        handleSubmitRegistro,
        handleChangeContact,
        clearDataRegistro,
    } = actions;
    const {
        registro_nombre: nombre,
        registro_email: email,
        registro_patente: patente,
        registro_condiciones: condiciones,
        registro_errors: errors,
        registro_result_success: result_success,
        registro_result_error: result_error,
        registro_result,
    } = store;
    const { isShown, showModal, hideModal, modalProperties } = useModal();

    useEffect(() => {
        function activateModal() {
            showModal({
                title: 'BIENVENIDO A AUTO ALERTA',
                dismissButtonText: 'Aceptar',
                bodyText: result_success || result_error,
                isSuccess: !!result_success,
                handleClose: function () {
                    clearDataRegistro();
                    hideModal();
                    setTimeout(() => {
                        history.push('/');
                    }, 600);
                },
            });
        }
        if (registro_result) {
            activateModal();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registro_result]);
    return (
        <Layout
            header={'Registrate'}
            subtitle={
                'Empieza a recibir notificaciones en caso de que tu vehículo se encuentre en peligro o alguna situación.'
            }
        >
            <section className="page__section">
                <h2 className="page__subheading">Ingresa tus datos</h2>

                <Form onSubmit={handleSubmitRegistro}>
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Nombre y apellido*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="registro_nombre"
                                        placeholder="Ingresa nombre"
                                        onChange={handleChangeContact}
                                        isInvalid={!!errors.nombre}
                                        value={nombre}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nombre}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Correo electrónico*</Form.Label>
                                    <Form.Control
                                        name="registro_email"
                                        type="text"
                                        placeholder="Ingresa tu correo"
                                        onChange={handleChangeContact}
                                        isInvalid={!!errors.email}
                                        value={email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Teléfono</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text
                                                style={{
                                                    background: 'transparent',
                                                }}
                                            >
                                                +569
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            style={{
                                                borderLeftColor: 'transparent',
                                            }}
                                            type="text"
                                            placeholder="XXXXXXXX"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Nº Patente*</Form.Label>
                                    <Form.Control
                                        name="registro_patente"
                                        type="text"
                                        placeholder="VSRE23"
                                        onChange={handleChangeContact}
                                        isInvalid={!!errors.patente}
                                        value={patente}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.patente}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Check
                                        custom
                                        required
                                        id="terms-and-contitions"
                                        type="checkbox"
                                        feedback={errors.condiciones}
                                    >
                                        <Form.Check.Input
                                            name="registro_condiciones"
                                            checked={!!condiciones}
                                            isInvalid={!!errors.condiciones}
                                            onChange={handleChangeContact}
                                            checkbox="true"
                                        />
                                        <Form.Check.Label>
                                            He leído y acepto los{' '}
                                            {/*eslint-disable-next-line*/}
                                            <a href="#">
                                                Términos y Condiciones
                                            </a>{' '}
                                            de Auto Alerta.
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.patente}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button
                                type="submit"
                                className="btn-long btn-lg mt-3"
                                //onClick={handleSubmitRegistro}
                            >
                                Enviar
                            </Button>
                        </div>
                    </Container>
                </Form>
                <Modal
                    isShown={isShown}
                    hideModal={hideModal}
                    {...modalProperties}
                />
            </section>
            <section>
                <div className="page__section bg-primary text-white">
                    <div className="d-flex flex-column flex-lg-row">
                        <Figure className="mr-lg-4">
                            <img src={moto} alt="Moped" className="img-fluid" />
                        </Figure>
                        <div>
                            <h4>Beneficios de Registrarte</h4>
                            <ol className="list-circled-numbers">
                                <li>
                                    Recibirás notificaciones por parte de la
                                    comunidad de cualquier situación que le
                                    ocurra a tu vehículo.
                                </li>
                                <li>
                                    Te informaremos de constantes mejoras dentro
                                    de la web y app.
                                </li>
                                <li>
                                    Serás parte de la comunidad Auto Alerta.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Registro;
