import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/css/bootstrap-theme.min.css';
import 'bootstrap-toggle/css/bootstrap-toggle.min.css'
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import Layout from './layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
