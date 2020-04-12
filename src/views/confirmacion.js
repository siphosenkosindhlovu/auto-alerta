import React, { Fragment, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Confirmacion = props => {
    const { store, actions } = useContext(Context);
    let token = props.match.params.token;
    useEffect(() => {
        actions.getConfirmation(token);
    }, [actions, token]);
    return (
        <Fragment>
            <section id="page">
                <div className="container">

                    <h1>Confirmacion Cuenta</h1>
                    <hr />

                    {
                        store.registro_confirm_success !== null ? (
                            <div className="alert alert-info alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Nota:</strong>. {store.registro_confirm_success}.<br />
                                <button className="btn btn-success btn-block" onClick={() => {
                                    actions.clearDataRegistro()
                                    props.history.push('/')
                                }}>
                                    Continuar
                                </button>
                            </div>
                        ) : (
                                <div className="alert alert-danger alert-dismissible">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <strong>Nota:</strong>. {store.registro_confirm_msg}.<br /><br />
                                    <button className="btn btn-danger btn-block" onClick={() => actions.clearDataRegistro()}>Reenviar Email</button>
                                </div>
                            )
                    }

                </div>
            </section>
        </Fragment>
    )
}

export default Confirmacion;