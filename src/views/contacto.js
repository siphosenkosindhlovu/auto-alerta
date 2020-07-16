import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from './../store/appContext';
//import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';
import ReCAPTCHA from 'react-google-recaptcha';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from 'components/Layout';
import Modal from 'components/BaseModal';
import useModal from 'hooks/useModal';

const Contact = (props) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    //6LcXsh4TAAAAAIMQIRcgdLIoA9KOz3mB2qKs4LOY
    const { isShown, showModal, hideModal, modalProperties } = useModal();
    const {
        contacto_errors: errors,
        contacto_nombre: nombre,
        contacto_asunto: asunto,
        contacto_email: email,
        contacto_result: result,
        contacto_mensaje: message,
    } = store;
    const {
        handleChangeContact,
        handleSubmitContact,
        clearData,
        verifyCallback,
    } = actions;

    useEffect(() => {
        let isSuccess = result ? true : false;
        function activateModal() {
            showModal({
                title: 'BIENVENIDO A AUTO ALERTA',
                dismissButtonText: 'Aceptar',
                bodyText: result,
                isSuccess: !!result,
                handleClose: function() {
                    clearData();
                    hideModal();
                    if (isSuccess) {
                        setTimeout(() => {
                            history.push('/');
                        }, 600);
                    }
                },
            });
        }
        if (isSuccess) {
            activateModal();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);

    return (
        <Layout
            header="Contacto"
            subtitle="Si tienes dudas o comentarios de alguna situación importante."
        >
            <section className="page__section">
                <h2 className="page__subheading">¿En qué podemos ayudarte?</h2>
                <Form onSubmit={handleSubmitContact}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre y apellido*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="contacto_nombre"
                                        placeholder="Ingresa nombre"
                                        value={nombre}
                                        onChange={handleChangeContact}
                                        isInvalid={!!errors.nombre}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nombre}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Correo electrónico*</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="contacto_email"
                                        placeholder="Ingresa tu correo"
                                        value={email}
                                        onChange={handleChangeContact}
                                        isInvalid={!!errors.email}
                                    />{' '}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control
                                as="select"
                                name="contacto_asunto"
                                value={asunto}
                                onChange={handleChangeContact}
                                isInvalid={!!errors.asunto}
                            >
                                <option value="">SELECCIONE</option>
                                <option value="Informar un problema">
                                    Informar un problema
                                </option>
                                <option value="Hacer una sugerencia">
                                    Hacer una sugerencia
                                </option>
                                <option value="Asociarte con nosotros">
                                    Asociarte con nosotros
                                </option>
                                <option value="Otro">Otro</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.asunto}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Mensanje"
                                rows="4"
                                name="contacto_mensaje"
                                value={message}
                                isInvalid={!!errors.mensaje}
                                onChange={handleChangeContact}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.mensaje}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <ReCAPTCHA
                                sitekey="6LcFadYUAAAAAGxPFH7Uyw6mA4cTEw1w6TXGHMdP"
                                onChange={verifyCallback}
                                theme="dark"
                                className="g-recaptcha"
                                name="contacto_recaptcha"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.recaptcha}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button
                                type="submit"
                                className="btn-long btn-lg mt-3"
                            >
                                Enviar
                            </Button>
                        </div>
                    </Container>
                </Form>
                {(result) && (
                    <Modal
                        isShown={isShown}
                        hideModal={hideModal}
                        {...modalProperties}
                    />
                )}
            </section>
        </Layout>
    );
};

export default Contact;
