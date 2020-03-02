import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Notificar = props => {
    const AceptarTerminosCondiciones = () => {
        alert(1);
    }
    return (
        <Fragment>
            <section id="page">
                <div className="container">
                    <h1>Informar situación</h1>
                    <hr />
                    <form action="notificar.html" className="form-horizontal" method="post">
                        <p>
                            Completa los datos para enviar un mensaje a motos, autos, buses y camiones mediante <strong>Auto Alerta</strong>
                        </p>
                        <hr />
                        <h3>Datos del vehículo</h3>
                        <hr />
                        <div className="form-group control-type-textarea control-name-mensaje ">
                            <label htmlFor="patente" className="col-lg-3 control-label">Patente</label>
                            <div className="col-lg-9 col-sm-12">
                                <input className="form-control solo-string" type="text" name="notificar[patente]" placeholder="XXYY11"
                                    style={{ textTransform: "uppercase" }} required id="notificar_patente" />
                                    <div id="validador-patente"></div>
                            </div>
                        </div>

                        <div className="form-group control-type-textarea control-name-mensaje ">
                            <label htmlFor="contacto_mensaje" className="col-lg-3 control-label">Mensaje</label>
                            <div className="col-lg-9 col-sm-12"><textarea rows="4" cols="30" className="form-control" name="mensaje"
                                placeholder="Este mensaje será público." id="contacto_mensaje"></textarea>
                            </div>
                        </div>

                        <div className="form-group control-type-textarea control-name-mensaje ">
                            <label htmlFor="contacto_email" className="col-lg-3 control-label">Tu correo</label>
                            <div className="col-lg-9 col-sm-12"><textarea rows="1" cols="30" className="form-control" name="email"
                                placeholder="No sera mostrado, este es para validar tu identidad." id="contacto_email"></textarea></div>
                        </div>



                        <input className="form-control" type="hidden" name="notificar[_csrf_token]" value="7f51a1c581af47f28766671f2af15a4a"
                            id="notificar__csrf_token" />
                        <div className="clearfix"></div>
                        <hr />
                        <div className="text-center">
                            <button type="button" className="btn btn-lg btn-success" onClick={() => AceptarTerminosCondiciones()}>Enviar</button>
                            <Link to="/" className="btn btn-lg btn-default">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default Notificar;