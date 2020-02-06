import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Notificar = props => {
    return (
        <Fragment>
            <section id="page">
                <div class="container">
                    <h1>Informar situación</h1>
                    <hr />
                    <form action="notificar.html" class="form-horizontal" method="post">
                        <p>
                            Completa los datos para enviar un mensaje a motos, autos, buses y camiones mediante <strong>Auto Alerta</strong>
                        </p>
                        <hr />
                        <h3>Datos del vehículo</h3>
                        <hr />
                        <div class="form-group form-group-patente">
                            <label for="patente" class="col-sm-3 control-label">Patente</label>
                            <div class="col-sm-4">
                                <input class="form-control solo-string" type="text" name="notificar[patente]" placeholder="XXYY11"
                                    style={{textTransform: "uppercase"}} required="required" id="notificar_patente" /> </div>
                            <div class="col-sm-5">
                                <div id="validador-patente"></div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="categoria_mensaje_id" class="col-sm-3 control-label">Vehículo</label>
                            <div class="col-sm-5">
                                <select name="categoria_mensaje_id" id="categoria_mensaje_id" class="form-control"
                                    onchange="load_mensajes(this.value);">
                                    <option value="1" selected="selected"> en movimiento</option>
                                    <option value="2"> estacionado</option>
                                </select>

                            </div>
                        </div>

                        <div class="form-group control-type-textarea control-name-mensaje ">
                            <label for="contacto_mensaje" class="col-lg-3 control-label">Mensaje</label>
                            <div class="col-lg-9"><textarea rows="4" cols="30" class="form-control" name="contacto[mensaje]"
                                placeholder="Este mensaje será público." id="contacto_mensaje"></textarea>
                            </div>
                        </div>

                        <div class="form-group control-type-textarea control-name-mensaje ">
                            <label for="contacto_mensaje" class="col-lg-3 control-label">Tu correo</label>
                            <div class="col-lg-9"><textarea rows="1" cols="30" class="form-control" name="contacto[mensaje]"
                                placeholder="No sera mostrado, este es para validar tu identidad." id="contacto_mensaje"></textarea></div>
                        </div>



                        <input class="form-control" type="hidden" name="notificar[_csrf_token]" value="7f51a1c581af47f28766671f2af15a4a"
                            id="notificar__csrf_token" />
                        <div class="clearfix"></div>
                        <hr />
                        <div class="text-center">
                            <button type="button" class="btn btn-lg btn-success" onclick="AceptarTerminosCondiciones()">Enviar</button>
                            <Link to="/" class="btn btn-lg btn-default">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default Notificar;