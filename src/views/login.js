import React, { Fragment, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
//import { Link } from 'react-router-dom';

const Login = props => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (store.isAuthenticated) props.history.push("/");
    });

    return (
        <Fragment>
            <section id="page">
                <div className="container">

                    <h1>Login</h1>
                    <hr />

                    <form method="post" className="form-horizontal col-lg-12" onSubmit={e => actions.getLogin(e, '/api/login', props.history)}>

                        <br />

                        {!!store.error && (
                            <div className="col-lg-9 col-md-offset-1">
                                <div className="alert alert-danger">
                                    {store.error.msg}
                                </div>
                            </div>
                        )}

                        <div className="form-group">
                            <div className="col-lg-8 col-md-offset-1">
                                <div className="form-group control-type-text control-name-nombre ">
                                    <label htmlFor="contacto_nombre" className="col-lg-3 control-label">Email</label>
                                    <div className="col-lg-9"><input type="text" name="email" className="form-control"
                                        placeholder="john.doe@email.com" id="contacto_nombre" onChange={e => actions.handleChange(e)} /></div>

                                    <div className="col-lg-offset-3 col-lg-9">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-8 col-md-offset-1">
                                <div className="form-group control-type-text control-name-nombre ">
                                    <label htmlFor="contacto_password" className="col-lg-3 control-label">Password</label>
                                    <div className="col-lg-9"><input type="password" name="password" className="form-control"
                                        placeholder="*********" id="contacto_password" onChange={e => actions.handleChange(e)} /></div>

                                    <div className="col-lg-offset-3 col-lg-9">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-12">
                                <div class="text-center">
                                    <button type="submit" class="btn btn-lg btn-success">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default Login;