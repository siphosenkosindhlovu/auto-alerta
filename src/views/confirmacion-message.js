import React, { Fragment, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const ConfirmacionMessage = props => {
    const { store, actions } = useContext(Context);
    let token = props.match.params.token;
    useEffect(() => {
        actions.getConfirmationNotify(token);
    }, [actions, token]);
    return (
        <Fragment>
            <section id="page">
                <div className="container">

                    <h1>Confirmacion Envio Notificacion</h1>
                    <hr />

                    {
                        store.notificar_confirm_result_success !== null ? (
                            <div className="alert alert-info alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Nota:</strong>. {store.notificar_confirm_result_success}.<br /> 
                                <button className="btn btn-success btn-block" onClick={() => {
                                    actions.clearDataNotificacion();
                                    props.history.push('/notificar');
                                }}>Continuar</button>
                            </div>
                        ):(
                            <div className="alert alert-danger alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Nota:</strong>. {store.notificar_confirm_result_error}.<br /><br /> 
                                <button className="btn btn-danger btn-block" 
                                onClick={(e) => { 
                                    actions.clearDataNotificacion();
                                    props.history.push('/notificar')
                                }}>Continuar</button>
                            </div>
                        )
                    }

                </div>
            </section>
        </Fragment>
    )
}

export default ConfirmacionMessage;