import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
//import 'bootstrap3/dist/css/bootstrap-theme.min.css';
// import 'bootstrap3/dist/css/bootstrap.min.css';
// import 'bootstrap-toggle/css/bootstrap-toggle.min.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'scss/main.scss';
import App from 'App';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register()