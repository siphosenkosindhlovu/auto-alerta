import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from './../store/appContext';
//import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';
import ReCAPTCHA from 'react-google-recaptcha';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from 'components/Layout';

const Contact = (props) => {
  const { store, actions } = useContext(Context);
  //6LcXsh4TAAAAAIMQIRcgdLIoA9KOz3mB2qKs4LOY
  const {
    contacto_errors: errors,
    contacto_nombre: name,
    contacto_email: email,
    contacto_result: result,
  } = store;
  const { handleChangeContact, handleSubmitContact, clearData } = actions;

  return (
    <Layout
      header="Contacto"
      subtitle="Si tienes dudas o comentarios de alguna situación importante."
    >
      <section className="page__section">
        <h2 className="page__subheading">¿En qué podemos ayudarte?</h2>
        <Form>
          <Container fluid>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre y apellido*</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa nombre" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Correo electrónico*</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu correo" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Asunto</Form.Label>
              <Form.Control as="select" onChange={handleChangeContact}>
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
            </Form.Group>
            <Form.Group>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" placeholder="Mensanje" rows="4" />
            </Form.Group>
            <Form.Group>
              <ReCAPTCHA
                sitekey="6LcFadYUAAAAAGxPFH7Uyw6mA4cTEw1w6TXGHMdP"
                onChange={actions.verifyCallback}
                theme="dark"
                className="g-recaptcha"
                name="contacto_recaptcha"
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" className="btn-long btn-lg mt-3">
                Enviar
              </Button>
            </div>
          </Container>
        </Form>
      </section>
      {/* <div className="container">
        <h1>Contacto</h1>
        <hr />

        <div className="form-horizontal col-md-8 col-md-offset-1">
          {store.contacto_result === null ? (
            <form
              action=""
              method="post"
              onSubmit={(e) => actions.handleSubmitContact(e)}
            >
              <div
                className={
                  'form-group control-type-text control-name-nombre ' +
                  (store.contacto_errors.nombre !== null ? 'has-error' : '')
                }
              >
                <label
                  htmlFor="contacto_nombre"
                  className="col-lg-3 control-label"
                >
                  Nombre
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="contacto_nombre"
                    className="form-control"
                    id="contacto_nombre"
                    onChange={(e) => actions.handleChangeContact(e)}
                    placeholder="John Doe"
                    value={store.contacto_nombre}
                  />
                </div>
                <div className="col-lg-offset-3 col-lg-9">
                  {store.contacto_errors.nombre !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.contacto_errors.nombre}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div
                className={
                  'form-group control-type-text control-name-email ' +
                  (store.contacto_errors.email !== null ? 'has-error' : '')
                }
              >
                <label
                  htmlFor="contacto_email"
                  className="col-lg-3 control-label"
                >
                  Correo
                </label>
                <div className="col-lg-9">
                  <input
                    placeholder="email@email.com"
                    className="form-control"
                    type="email"
                    name="contacto_email"
                    id="contacto_email"
                    onChange={(e) => actions.handleChangeContact(e)}
                    value={store.contacto_email}
                  />
                </div>
                <div className="col-lg-offset-3 col-lg-9">
                  {store.contacto_errors.email !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.contacto_errors.email}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div
                className={
                  'form-group control-type-choice control-name-asunto ' +
                  (store.contacto_errors.asunto !== null ? 'has-error' : '')
                }
              >
                <label
                  htmlFor="contacto_asunto"
                  className="col-lg-3 control-label"
                >
                  Asunto
                </label>
                <div className="col-lg-9">
                  <select
                    className="form-control"
                    name="contacto_asunto"
                    id="contacto_asunto"
                    onChange={(e) => actions.handleChangeContact(e)}
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
                  </select>
                </div>
                <div className="col-lg-offset-3 col-lg-9">
                  {store.contacto_errors.asunto !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.contacto_errors.asunto}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div
                className={
                  'form-group control-type-textarea control-name-mensaje ' +
                  (store.contacto_errors.mensaje !== null ? 'has-error' : '')
                }
              >
                <label
                  htmlFor="contacto_mensaje"
                  className="col-lg-3 control-label"
                >
                  Mensaje
                </label>
                <div className="col-lg-9">
                  <textarea
                    rows="4"
                    cols="30"
                    className="form-control"
                    name="contacto_mensaje"
                    onChange={(e) => actions.handleChangeContact(e)}
                    id="contacto_mensaje"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <div className="col-lg-offset-3 col-lg-9">
                  {store.contacto_errors.mensaje !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.contacto_errors.mensaje}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div
                className={
                  'form-group control-type-textarea control-name-mensaje ' +
                  (store.contacto_errors.recaptcha !== null ? 'has-error' : '')
                }
              >
                <label
                  htmlFor="contacto_mensaje"
                  className="col-lg-3 control-label"
                >
                  Validacion
                </label>
                <div className="col-lg-9">
                  <ReCAPTCHA
                    sitekey="6LcFadYUAAAAAGxPFH7Uyw6mA4cTEw1w6TXGHMdP"
                    onChange={actions.verifyCallback}
                    theme="dark"
                    className="g-recaptcha"
                    name="contacto_recaptcha"
                  />
                </div>
                <div className="col-lg-offset-3 col-lg-9">
                  {store.contacto_errors.recaptcha !== null ? (
                    <span id="helpBlock2" className="help-block">
                      {store.contacto_errors.recaptcha}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div className="col-md-offset-5 col-md-5">
                <div className="text-center">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="alert alert-info alert-dismissible">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Nota:</strong>. {store.contacto_result}.<br />{' '}
              <button
                className="btn btn-success btn-block"
                onClick={() => actions.clearData()}
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      </div> */}
    </Layout>
  );
};

export default withRouter(Contact);
