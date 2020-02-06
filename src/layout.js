import React from 'react';
import injectContext from './store/appContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './views/login';
import Home from './views/home';
import Registro from './views/registro';
import Preguntas from './views/preguntas';
import Notificar from './views/notificar';
import Contact from './views/contacto';
import Terminos from './views/terminos';

const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/notificar" component={Notificar} />
                <Route exact path="/contacto" component={Contact} />
                <Route exact path="/terminos" component={Terminos} />
                <Route exact path="/preguntas-frecuentes" component={Preguntas} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);