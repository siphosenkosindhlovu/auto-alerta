import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Registro = props => {
    return (
        <Fragment>
            <section id="page">
                <div className="container">

                    <h1>Registro</h1>
                    <hr />

                    <form method="post" className="form-horizontal col-lg-12 ">

                        <br />

                        <div className="form-group">
                            <div className="col-lg-8 col-md-offset-1">
                                <div className="form-group control-type-text control-name-nombre ">
                                    <label for="contacto_nombre" className="col-lg-3 control-label">Nombre</label>
                                    <div className="col-lg-9"><input type="text" name="contacto[nombre]" className="form-control"
                                        placeholder="Nombre Completo" id="contacto_nombre" /></div>

                                    <div className="col-lg-offset-3 col-lg-9">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-8 col-md-offset-1">
                                <div className="form-group control-type-text control-name-email_address ">
                                    <label for="registro_email_address" className="col-lg-3 control-label">Correo</label>
                                    <div className="col-lg-9"><input placeholder="email@email.com" type="text" name="registro[email_address]"
                                        className="form-control" id="email_address" /></div>
                                    <div className="col-lg-offset-3 col-lg-9">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div id="vehiculos">
                            <h3>Mi<span className="s"></span> Vehículo<span className="s"></span></h3>
                            <div className="form-group">
                                <div className="col-lg-8 col-md-offset-1">
                                    <div className="form-group control-type-text control-name-patente ">
                                        <label for="registro_patente" className="col-lg-3 control-label">Patente</label>
                                        <div className="col-lg-9"><input className="form-control solo-check" type="text" name="registro[patente]"
                                            placeholder="XXYY11*" style={{ "textTransform": "uppercase" }} id="patente" /></div>
                                        <div className="col-lg-offset-3 col-lg-9"><span className="help-block">*Campo no requerido.</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-md-offset-3">
                                        <div id="validador-patente"></div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div class="col-md-12">
                                    <input type="checkbox" name="registro[condiciones]" id="registro_condiciones" /> <b>He leido y Acepto los
                                    <Link to="/terminos" target="_blank" rel="">Términos y Condiciones</Link> de Auto Alerta.</b>
                                </div>

                                <div class="clearfix"></div>
                                <hr />
                                <div class="text-center">
                                    <button type="submit" class="btn btn-lg btn-success">REGISTRAR</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default Registro;