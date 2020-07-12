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
                handleClose: function () {
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
                <Modal
                    isShown={isShown}
                    hideModal={hideModal}
                    {...modalProperties}
                />
                {/* <section id="page">
        <div className="container">
          <h1>Informar situación</h1>
          <hr />
          <form
            onSubmit={(e) => actions.handleSubmitNotificar(e)}
            className="form-horizontal"
            method="post"
          >
            <p>
              Completa los datos para enviar un mensaje a motos, autos, buses y
              camiones mediante <strong>Auto Alerta</strong>
            </p>
            <hr />
            <h3>Datos del vehículo</h3>
            <hr />
            {store.notificar_result_success !== null ? (
              <div className="alert alert-info alert-dismissible">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong>Nota:</strong>. {store.notificar_result_success}.<br />{' '}
                <button
                  className="btn btn-success btn-block"
                  onClick={() => actions.clearDataNotificacion()}
                >
                  Continuar
                </button>
              </div>
            ) : store.notificar_result_error !== null ? (
              <div className="alert alert-danger alert-dismissible">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong>Nota:</strong>. {store.notificar_result_error}.<br />
                <br />
              </div>
            ) : (
              ''
            )}
            <div
              className={
                'form-group control-type-textarea control-name-mensaje ' +
                (store.notificar_errors.patente !== null ? 'has-error' : '')
              }
            >
              <label htmlFor="patente" className="col-lg-3 control-label">
                Patente
              </label>
              <div className="col-lg-9 col-sm-12">
                <input
                  className="form-control solo-string"
                  type="text"
                  name="notificar_patente"
                  placeholder="XXYY11"
                  style={{ textTransform: 'uppercase' }}
                  id="notificar_patente"
                  value={store.notificar_patente}
                  onChange={(e) => actions.handleChange(e)}
                />
                <div className="col-lg-offset-3 col-lg-9">
                  {store.notificar_errors.patente !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.notificar_errors.patente}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>

            <div
              className={
                'form-group control-type-textarea control-name-mensaje ' +
                (store.notificar_errors.mensaje !== null ? 'has-error' : '')
              }
            >
              <label
                htmlFor="notificar_mensaje"
                className="col-lg-3 control-label"
              >
                Mensaje
              </label>
              <div className="col-lg-9 col-sm-12">
                <textarea
                  rows="4"
                  cols="30"
                  className="form-control"
                  name="notificar_mensaje"
                  placeholder="Este mensaje será público."
                  id="notificar_mensaje"
                  value={store.notificar_mensaje}
                  onChange={(e) => actions.handleChange(e)}
                ></textarea>
                <div className="col-lg-offset-3 col-lg-9">
                  {store.notificar_errors.mensaje !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.notificar_errors.mensaje}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>

            <div
              className={
                'form-group control-type-textarea control-name-mensaje ' +
                (store.notificar_errors.email !== null ? 'has-error' : '')
              }
            >
              <label
                htmlFor="notificar_email"
                className="col-lg-3 control-label"
              >
                Tu correo
              </label>
              <div className="col-lg-9 col-sm-12">
                <input
                  className="form-control solo-string"
                  type="text"
                  name="notificar_email"
                  placeholder="No sera mostrado, este es para validar tu identidad."
                  id="notificar_email"
                  value={store.notificar_email}
                  onChange={(e) => actions.handleChange(e)}
                />
                <div className="col-lg-offset-3 col-lg-9">
                  {store.notificar_errors.email !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.notificar_errors.email}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <hr />
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-lg btn-success"
                onClick={() => AceptarTerminosCondiciones()}
              >
                Enviar
              </button>
              <Link to="/" className="btn btn-lg btn-default">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </section> */}
            </Layout>
        </>
    );
};

export default Notificar;
