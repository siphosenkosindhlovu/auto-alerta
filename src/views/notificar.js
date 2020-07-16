import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from './../store/appContext';
import Layout from 'components/Layout';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import alertCircle from 'images/ic-alerta_Mesa de trabajo 1.svg';
import Modal from 'components/BaseModal';
import useModal from 'hooks/useModal';

const Notificar = (props) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    const {
        notificar_patente: patente,
        notificar_mensaje: mensaje,
        notificar_email: email,
        notificar_errors: errors,
        notificar_result_success: result_success,
        notificar_result_error: result_error,
    } = store;

    const {
        handleChange,
        handleSubmitNotificar,
        clearDataNotificacion,
    } = actions;

    const { isShown, showModal, hideModal, modalProperties } = useModal();

    useEffect(() => {
        let isSuccess = result_success ? true : false;
        function activateModal() {
            showModal({
                title: 'BIENVENIDO A AUTO ALERTA',
                dismissButtonText: 'Aceptar',
                bodyText: result_success || result_error,
                isSuccess: !!result_success,
                handleClose: function() {
                    clearDataNotificacion();
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
    }, [result_success, result_error]);
    return (
        <>
            <Layout
                header={'Informar situación'}
                subtitle={`Completa los datos para enviar un mensaje a motos, autos, buses y camiones mediante Auto Alerta`}
            >
                <section className="page__section">
                    <h2 className="page__subheading">Datos del vehículo</h2>
                    <Container fluid>
                        <Form onSubmit={handleSubmitNotificar}>
                            <Form.Group>
                                <Form.Label>Nº Patente*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="VSRE23"
                                    name="notificar_patente"
                                    value={patente}
                                    onChange={handleChange}
                                    isInvalid={!!errors.patente}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.patente}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mensaje*</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="notificar_mensaje"
                                    placeholder="Ingresa detalles de la situación vista"
                                    rows="4"
                                    value={mensaje}
                                    onChange={handleChange}
                                    isInvalid={!!errors.mensaje}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.mensaje}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <hr className="bg-primary" />
                            <Form.Group>
                                <Form.Label>Correo electrónico*</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="notificar_email"
                                    placeholder="Ingrese tu correo"
                                    value={email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Text className="d-flex">
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
                                        Antes de notificar al destinatario,
                                        verificaremos que tu correo sea válido.
                                    </div>
                                </Form.Text>
                            </Form.Group>
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    className="btn-long btn-lg mt-3"
                                >
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </section>
                {(result_success || result_error) && (
                    <Modal
                        isShown={isShown}
                        hideModal={hideModal}
                        {...modalProperties}
                    />
                )}
            </Layout>
        </>
    );
};

export default Notificar;
