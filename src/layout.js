import React from 'react';
import injectContext from './store/appContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/admin/login" component={Login}/>
                <Route exact path="/" component={Home}/>
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);