import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from 'store/appContext';
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
import PropTypes from 'prop-types';

function FilterSearchHeader({ children, desktop }) {
    let classNames = 'filter-search__header bg-primary align-self-center';
    if (!desktop) classNames += ' d-xl-none';
    if (desktop) classNames += ' filter-search__header--desktop';
    return <div className={classNames}>{children}</div>;
}

FilterSearchHeader.protoTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    desktop: PropTypes.bool,
};

export default function FilterSearch() {
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
        <section
            className="filter-search__wrapper pt-0 pb-3 py-xl-5"
            style={{ backgroundColor: '#e5e5e5' }}
        >
            {' '}
            <FilterSearchHeader>
                Informar
                <div className="filter-search__arrow-container"></div>
            </FilterSearchHeader>
            <Container>
                <Form onSubmit={handleSubmitNotificar}>
                    <Row className="align-items-end">
                        <Col xl={2} className="d-none d-xl-block">
                            <FormGroup>
                                <FilterSearchHeader desktop>
                                    Informar
                                </FilterSearchHeader>
                            </FormGroup>
                        </Col>
                        <Col lg={2}>
                            <FormGroup controlId="notificar_patente">
                                <FormLabel>Nº Patente</FormLabel>
                                <FormControl
                                    className="filter-search__input"
                                    placeholder="VSRE23"
                                    name="notificar_patente"
                                    value={patente}
                                    onChange={handleChange}
                                    isInvalid={!!errors.patente}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg={5} xl={4}>
                            <FormGroup controlId="notificar_mensaje">
                                <FormLabel>Mensaje</FormLabel>
                                <FormControl
                                    className="filter-search__input"
                                    placeholder="Reportar robo"
                                    name="notificar_mensaje"
                                    value={mensaje}
                                    onChange={handleChange}
                                    isInvalid={!!errors.mensaje}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg={3} className="filter-search__input--bordered">
                            <FormGroup controlId="notificar_email">
                                <FormLabel>Correo electrónico</FormLabel>
                                <FormControl
                                    className="filter-search__input"
                                    placeholder="Ingresa tu correo"
                                    name="notificar_email"
                                    value={email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                            </FormGroup>
                        </Col>
                        <FormGroup className="text-center col-lg">
                            <Button
                                className="filter-search__input filter-search__input--submit"
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </FormGroup>
                    </Row>
                    <Row>
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
                                        Antes de notificar al destinatario,
                                        verificaremos que tu correo sea válido.
                                    </div>
                                </FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
            {(result_success || result_error) && (
                <Modal
                    isShown={isShown}
                    hideModal={hideModal}
                    {...modalProperties}
                />
            )}
        </section>
    );
}
