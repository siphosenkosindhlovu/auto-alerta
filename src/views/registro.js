import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Registro = props => {
    const { store, actions } = useContext(Context);
    return (
        <Fragment>
            <section id="page">
                <div className="container">

                    <h1>Registro</h1>
                    <hr />
                    {
                        store.registro_result === null ?
                            (
                                <form method="post" className="form-horizontal col-lg-12 " onSubmit={(e) => actions.handleSubmitRegistro(e)}>

                                    <br />

                                    <div className="form-group">
                                        <div className="col-lg-8 col-md-offset-1">
                                            <div className={"form-group control-type-text control-name-nombre " + (store.registro_errors.nombre !== null ? 'has-error' : '')}>
                                                <label htmlFor="registro_nombre" className="col-lg-3 control-label">Nombre</label>
                                                <div className="col-lg-9"><input type="text" name="registro_nombre" className="form-control"
                                                    placeholder="Nombre Completo" id="registro_nombre" onChange={(e) => actions.handleChangeContact(e)} /></div>

                                                <div className="col-lg-offset-3 col-lg-9">
                                                    {(store.registro_errors.nombre !== null ? (
                                                        <span id="helpBlock2" className="help-block">
                                                            {store.registro_errors.nombre}
                                                        </span>
                                                    ) : (''))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-8 col-md-offset-1">
                                            <div className={"form-group control-type-text control-name-email_address " + (store.registro_errors.email !== null ? 'has-error' : '')}>
                                                <label htmlFor="registro_email" className="col-lg-3 control-label">Correo</label>
                                                <div className="col-lg-9"><input placeholder="email@email.com" type="text" name="registro_email"
                                                    className="form-control" id="registro_email" onChange={(e) => actions.handleChangeContact(e)} /></div>
                                                <div className="col-lg-offset-3 col-lg-9">
                                                    {(store.registro_errors.email !== null ? (
                                                        <span id="helpBlock2" className="help-block">
                                                            {store.registro_errors.email}
                                                        </span>
                                                    ) : (''))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                    <div id="vehiculos">
                                        <h3>Mi<span className="s"></span> Vehículo<span className="s"></span></h3>
                                        <div className="form-group">
                                            <div className="col-lg-8 col-md-offset-1">
                                                <div className={"form-group control-type-text control-name-patente " + (store.registro_errors.patente !== null ? 'has-error' : '')}>
                                                    <label htmlFor="registro_patente" className="col-lg-3 control-label">Patente</label>
                                                    <div className="col-lg-9"><input className="form-control solo-check" type="text" name="registro_patente"
                                                        placeholder="XXYY11" style={{ "textTransform": "uppercase" }} id="registro_patente"
                                                        onChange={(e) => actions.handleChangeContact(e)} /></div>
                                                    <div className="col-lg-offset-3 col-lg-9">
                                                        {(store.registro_errors.patente !== null ? (
                                                            <span id="helpBlock2" className="help-block">
                                                                {store.registro_errors.patente}
                                                            </span>
                                                        ) : (''))}
                                                    </div>
                                                </div>

                                                <div className="col-lg-9 col-md-offset-3">
                                                    <div id="validador-patente"></div>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-lg-8 col-md-offset-1">
                                                <div className={"form-group control-type-text control-name-patente " + (store.registro_errors.condiciones !== null ? 'has-error' : '')}>
                                                    <input type="checkbox" name="registro_condiciones" id="registro_condiciones" onChange={(e) => actions.handleChangeRegistro(e)} /> <b>He leido y Acepto los
                                        <Link to="/terminos" target="_blank" rel="">Términos y Condiciones</Link> de Auto Alerta.</b>
                                                    <div className="col-lg-12">
                                                        {(store.registro_errors.condiciones !== null ? (
                                                            <span id="helpBlock2" className="help-block">
                                                                {store.registro_errors.condiciones}
                                                            </span>
                                                        ) : (''))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <hr />
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-md btn-success">REGISTRAR</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            ) : (
                                store.registro_result_success !== null ?
                                    (
                                        <div className="alert alert-info alert-dismissible">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <strong>Nota:</strong>. {store.registro_result_success}.<br /> <button className="btn btn-success btn-block" onClick={() => actions.clearDataRegistro()}>Continuar</button>
                                        </div>
                                    ) : (
                                        <div className="alert alert-danger alert-dismissible">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <strong>Nota:</strong>. {store.registro_result_error}.<br /> <br />
                                            <button className="btn btn-warning btn-block" onClick={() => actions.clearDataRegistro()}>Continuar</button>
                                        </div>
                                    )
                            )
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default Registro;