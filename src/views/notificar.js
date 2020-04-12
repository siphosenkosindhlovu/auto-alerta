import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../store/appContext';

const Notificar = props => {
    const { store, actions } = useContext(Context);
    const AceptarTerminosCondiciones = () => {
        //alert(1);
    }
    return (
        <Fragment>
            <section id="page">
                <div className="container">
                    <h1>Informar situación</h1>
                    <hr />
                    <form onSubmit={(e) => actions.handleSubmitNotificar(e)} className="form-horizontal" method="post">
                        <p>
                            Completa los datos para enviar un mensaje a motos, autos, buses y camiones mediante <strong>Auto Alerta</strong>
                        </p>
                        <hr />
                        <h3>Datos del vehículo</h3>
                        <hr />
                        {
                            store.notificar_result_success !== null ? (
                                <div className="alert alert-info alert-dismissible">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <strong>Nota:</strong>. {store.notificar_result_success}.<br /> <button className="btn btn-success btn-block" onClick={() => actions.clearDataNotificacion()}>Continuar</button>
                                </div>
                            ) : store.notificar_result_error !== null ? (
                                <div className="alert alert-danger alert-dismissible">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <strong>Nota:</strong>. {store.notificar_result_error}.<br /><br />
                                </div>
                            ) : ("")
                        }
                        <div className={"form-group control-type-textarea control-name-mensaje " + (store.notificar_errors.patente !== null ? 'has-error' : '')}>
                            <label htmlFor="patente" className="col-lg-3 control-label">Patente</label>
                            <div className="col-lg-9 col-sm-12">
                                <input className="form-control solo-string" type="text" name="notificar_patente" placeholder="XXYY11"
                                    style={{ textTransform: "uppercase" }} id="notificar_patente"
                                    value={store.notificar_patente}
                                    onChange={(e) => actions.handleChange(e)} />
                                <div className="col-lg-offset-3 col-lg-9">
                                    {(store.notificar_errors.patente !== null ? (
                                        <span id="helpBlock2" className="help-block">
                                            {store.notificar_errors.patente}
                                        </span>
                                    ) : (''))}
                                </div>
                            </div>
                        </div>

                        <div className={"form-group control-type-textarea control-name-mensaje " + (store.notificar_errors.mensaje !== null ? 'has-error' : '')}>
                            <label htmlFor="notificar_mensaje" className="col-lg-3 control-label">Mensaje</label>
                            <div className="col-lg-9 col-sm-12"><textarea rows="4" cols="30" className="form-control" name="notificar_mensaje"
                                placeholder="Este mensaje será público." id="notificar_mensaje"
                                value={store.notificar_mensaje}
                                onChange={(e) => actions.handleChange(e)}></textarea>
                                <div className="col-lg-offset-3 col-lg-9">
                                    {(store.notificar_errors.mensaje !== null ? (
                                        <span id="helpBlock2" className="help-block">
                                            {store.notificar_errors.mensaje}
                                        </span>
                                    ) : (''))}
                                </div>
                            </div>
                        </div>

                        <div className={"form-group control-type-textarea control-name-mensaje " + (store.notificar_errors.email !== null ? 'has-error' : '')}>
                            <label htmlFor="notificar_email" className="col-lg-3 control-label">Tu correo</label>
                            <div className="col-lg-9 col-sm-12"><input className="form-control solo-string" type="text" name="notificar_email"
                                placeholder="No sera mostrado, este es para validar tu identidad." id="notificar_email"
                                value={store.notificar_email}
                                onChange={(e) => actions.handleChange(e)} />
                                <div className="col-lg-offset-3 col-lg-9">
                                    {(store.notificar_errors.email !== null ? (
                                        <span id="helpBlock2" className="help-block">
                                            {store.notificar_errors.email}
                                        </span>
                                    ) : (''))}
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <hr />
                        <div className="text-center">
                            <button type="submit" className="btn btn-lg btn-success" onClick={() => AceptarTerminosCondiciones()}>Enviar</button>
                            <Link to="/" className="btn btn-lg btn-default">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default Notificar;