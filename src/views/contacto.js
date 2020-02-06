import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { ReCaptcha } from 'react-recaptcha-google'

const Contact = props => {
    const { actions } = useContext(Context);
    //6LcXsh4TAAAAAIMQIRcgdLIoA9KOz3mB2qKs4LOY
    useEffect(() => {
        
    }, [])
    return (
        <section id="page">
            <div className="container">


                <h1>Contacto</h1>
                <hr />

                <div className="form-horizontal col-md-8 col-md-offset-1">
                    <form action="" method="post" onSubmit={(e) => actions.handleSubmitContact(e)}>
                        <div className="form-group control-type-text control-name-nombre ">
                            <label htmlFor="contacto_nombre" className="col-lg-3 control-label">Nombre</label>
                            <div className="col-lg-9">
                                <input type="text" name="name" className="form-control"
                                    id="contacto_nombre" onChange={(e) => actions.handleChangeContact(e)}
                                    placeholder="John Doe" /></div>
                            <div className="col-lg-offset-3 col-lg-9">
                            </div>
                        </div>

                        <div className="form-group control-type-text control-name-email ">
                            <label htmlFor="contacto_email" className="col-lg-3 control-label">Correo</label>
                            <div className="col-lg-9"><input placeholder="email@email.com" className="form-control" type="text"
                                name="email" id="contacto_email" onChange={(e) => actions.handleChangeContact(e)} /></div>
                            <div className="col-lg-offset-3 col-lg-9">
                            </div>
                        </div>

                        <div className="form-group control-type-choice control-name-asunto ">
                            <label htmlFor="contacto_asunto" className="col-lg-3 control-label">Asunto</label>
                            <div className="col-lg-9">
                                <select className="form-control" name="subject" id="contacto_asunto" onChange={(e) => actions.handleChangeContact(e)}>
                                    <option value="Informar un problema">Informar un problema</option>
                                    <option value="Hacer una sugerencia">Hacer una sugerencia</option>
                                    <option value="Asociarte con nosotros">Asociarte con nosotros</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div className="col-lg-offset-3 col-lg-9">
                            </div>
                        </div>


                        <div className="form-group control-type-textarea control-name-mensaje ">
                            <label htmlFor="contacto_mensaje" className="col-lg-3 control-label">Mensaje</label>
                            <div className="col-lg-9"><textarea rows="4" cols="30" className="form-control" name="message"
                                onChange={(e) => actions.handleChangeContact(e)}
                                id="contacto_mensaje" placeholder="Mensaje"></textarea></div>
                            <div className="col-lg-offset-3 col-lg-9">
                            </div>
                        </div>

                        <div className="form-group control-type-izaruswidgetformrecaptcha control-name-validator ">
                            <label htmlFor="contacto_validator" className="col-lg-3 control-label">Validación</label>

                            <div className="col-lg-offset-3 col-lg-9">
                                <ReCaptcha
                                    className="g-recaptcha"
                                    size="normal"
                                    data-theme="dark"
                                    render="explicit"
                                    sitekey="6LcFadYUAAAAAGxPFH7Uyw6mA4cTEw1w6TXGHMdP"
                                />
                            </div>
                            <div className="col-lg-9">

                            </div>
                        </div>


                        <div className="col-md-offset-5 col-md-5">
                            <div className="text-center">
                                <button type="submit" className="btn btn-lg btn-primary">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;