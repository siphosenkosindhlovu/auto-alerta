import React from 'react';
import injectContext from './store/appContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './views/login';
import Home from './views/home';
import Registro from './views/registro';
import Preguntas from './views/preguntas';
import Notificar from './views/notificar';
import Contact from './views/contacto';
import Terminos from './views/terminos';
import Confirmacion from './views/confirmacion';
import Configuracion from './views/configuracion';
import ConfirmacionMessage from './views/confirmacion-message';
import 'fontawesomeLibrary';

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/confirmation/:token" component={Confirmacion} />
        <Route exact path="/confirmation/" component={Confirmacion} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/configuracion/:mod" component={Configuracion} />
        <Route exact path="/configuracion" component={Configuracion} />
        <Route
          exact
          path="/notificar/confirmacion/:token"
          component={ConfirmacionMessage}
        />
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
  );
};

export default injectContext(Layout);
