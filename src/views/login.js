import React, { Fragment, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Login = props => {
    const {store, actions} = useContext(Context);

    useEffect(() => {
        if(store.isAuthenticated) props.history.push("/");
    });

    return (
        <Fragment>
            <h1>Login</h1>
            {!!store.error && (store.error.msg)}
            <form onSubmit={e => actions.getLogin(e, '/api/login', props.history)}>
                <input type="email" name="email" id="email" placeholder="john.doe@gmail.com" onChange={e => actions.handleChange(e)}/><br />
                <input type="password" name="password" id="password" placeholder="******" onChange={e => actions.handleChange(e)}/><br /> 
                <button>Login</button> 
            </form>
        </Fragment>
    )
}

export default Login;