import React, { useEffect } from 'react';
import Hero from 'components/Hero';
import FilterSearch from 'components/FilterSearch';
//import { Context } from '../store/appContext';
//import { Link } from 'react-router-dom';
//import moment from 'moment';

const Home = (props) => {
  //const { store } = useContext(Context);

  useEffect(() => {
    //if (!store.isAuthenticated) props.history.push("/login");
  });

  return (
    <>
      <Hero />
      <FilterSearch />
      {/* <section id="cellphone" className="">
        <div className="container">
          <div className="row">
            <div id="celular" className="col-sm-5 col-md-4 hidden-xs"></div>
            <div className="col-sm-7 col-md-8">
              <br />
              <h1 className="text-center">Informar es Prevenir.</h1>
              <p className="text-center hidden-xs">
                <a
                  href="notificar.html"
                  className="btn btn-danger btn-lg btn-danger"
                >
                  Informar Situación
                </a>
              </p>
              <div className="row hidden-xs">
                <div className="col-sm-4 text-center">
                  <img
                    src={require('./../images/hurto.jpg')}
                    className="img-responsive"
                    alt="hurto"
                  />
                  <h3>Hurtos</h3>
                </div>
                <div className="col-sm-4 text-center">
                  <img
                    src={require('./../images/descuido.jpg')}
                    className="img-responsive"
                    alt="descuido"
                  />
                  <h3>Descuidos</h3>
                </div>
                <div className="col-sm-4 text-center">
                  <img
                    src={require('./../images/accidente.jpg')}
                    className="img-responsive"
                    alt="accidente"
                  />
                  <h3>Accidentes</h3>
                </div>
              </div>
              <div
                id="carousel-inicio"
                className="carousel slide visible-xs center-block"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-inicio"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carousel-inicio" data-slide-to="1"></li>
                  <li data-target="#carousel-inicio" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img
                      src={require('./../images/hurto_g.jpg')}
                      alt="Hurto.jpg"
                    />
                    <div className="carousel-caption">
                      <h3>Hurtos</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img
                      src={require('./../images/descuido_g.jpg')}
                      alt="descuido.jpg"
                    />
                    <div className="carousel-caption">
                      <h3>Descuidos</h3>
                    </div>
                  </div>
                  <div className="item">
                    <img
                      src={require('./../images/accidente_g.jpg')}
                      alt="accidente.jpg"
                    />
                    <div className="carousel-caption">
                      <h3>Accidentes</h3>
                    </div>
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#carousel-inicio"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="glyphicon glyphicon-chevron-left"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#carousel-inicio"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <p className="text-center visible-xs">
                <a
                  href="notificar"
                  className="btn btn-danger btn-lg btn-danger"
                >
                  Informar Situación
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="caracteristicas">
        <div className="container">
          <ul className="redes-sociales hidden-xs">
            <a href="https://www.facebook.com/AutoAlertaCL/" target="_blanc">
              <li className="iconos-redes-facebook">
                <i className="fab fa-facebook fa-2x"></i>
              </li>
            </a>
            <a href="https://twitter.com/AutoAlertaCL" target="_blanc">
              <li className="iconos-redes-twitter">
                <i className="fab fa-twitter fa-2x"></i>
              </li>
            </a>
          </ul>
          <br />
          <h2 id="blink" className="hidden-xs">
            No más robo de vehículos!
          </h2>
          <h2 id="blink_2" className="visible-xs">
            No más robo!
          </h2>
          <h3 className="hidden-xs">
            El próximo podrías ser tú,{' '}
            <a href="registro.html">registrate ahora.</a>
          </h3>
          <h3 className="visible-xs">
            {' '}
            <a href="registro.html">Registrate ahora.</a>
          </h3>

          <section id="ejemplos">
            <div className="row">
              <div className="col-md-6">
                <h3 className="green">¿SI ALGUIEN INTENTA ROBAR UN AUTO?</h3>
                <div className="circle">
                  <i className="fa fa-car fa-3x"></i>
                  <i className="fa fa-car fa-4x"></i>
                </div>
                <div className="circle-info">
                  <h4>
                    <br />
                    <strong>a)</strong>
                    <strike> Intervienes</strike>
                    <br />
                    <strong>b)</strong> Llamas a carabineros
                    <br />
                    <strong>c) Contactas al dueño</strong>
                    <br />
                    <br />
                    El tiempo es vital, utiliza <b>Auto Alerta</b>.
                  </h4>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="col-md-6">
                <h3 className="green">¿VAS EN UN BUS A EXCESO DE VELOCIDAD?</h3>
                <div className="circle">
                  <i className="fa fa-bus fa-5x"></i>
                </div>
                <div className="circle-info">
                  <h4>
                    <br />
                    <strong>a)</strong>
                    <strike> Intervienes</strike>
                    <br />
                    <strong>b)</strong> Informas al Ministerio de Transporte
                    <br />
                    <strong>c) Informas directamente a la empresa</strong>
                    <br />
                  </h4>
                  <h3>
                    <b>
                      ¿Deseas lamentar o <a href="notificar.html">prevenir</a>?
                    </b>
                  </h3>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </section>

          <section id="motivacion">
            <p className="home-lead">
              Al pertenecer a <b>Auto Alerta</b>, estarás formando parte de la{' '}
              <b>primera</b> comunidad fundada entre{' '}
              <b>automovilistas solidarios preocupados</b> en hacer de las
              calles un lugar más seguro para el transporte. Logrando de forma
              colaborativa ayudar a otros y eventualmente ser informado de
              situaciones que pueden ocurrir mientras no estas cerca de tu
              vehículo (hurtos, descuidos y más).
            </p>
            <p className="home-lead">
              Enviamos notificaciones preventivas pre-configuradas en tiempo
              real que permiten al propietario de todo vehículo registrado
              realizar mejoras correctivas, ofreciendo la posibilidad de{' '}
              <b>prevenir</b> diversas situaciones. Tranquilo, son anónimas.
            </p>
            <p className="home-lead">
              Servicio <b>GRATUITO</b>.
            </p>
          </section>
        </div>
      </section>

      <section id="instrucciones">
        <div className="container">
          <h3>¿Cómo funciona?</h3>
          <div className="row hidden-xs">
            <div className="col-xs-3 text-center">
              <div className="circle">
                <i className="fa fa-sign-out-alt fa-5x"></i>
              </div>
              <p>Ingresa</p>
            </div>
            <div className="col-xs-3 text-center">
              <div className="circle">
                <i className="fa fa-user fa-5x"></i>
              </div>
              <p>Registrate</p>
            </div>
            <div className="col-xs-3 text-center">
              <div className="circle">
                <i className="fa fa-comment fa-5x"></i>
              </div>
              <p>Informa</p>
            </div>
            <div className="col-xs-3 text-center">
              <div className="circle">
                <i className="fa fa-child fa-5x"></i>
              </div>
              <p>¡Eso es todo!</p>
            </div>
          </div>
          <div className="visible-xs">
            <ol>
              <li>Ingresa</li>
              <li>Registrate</li>
              <li>Informa</li>
              <li>¡Eso es todo!</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="aplicacion">
        <div className="container">
          <div className="col-lg-6 col-md-6 col-sm-6 text-center">
            <Link to="/registro">
              <img
                className="img-responsive center-block"
                src={require('./../images/googleplay.png')}
                alt="googleplay.png"
              />
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 text-center">
            <Link to="/registro">
              <img
                className="img-responsive center-block"
                src={require('./../images/app.png')}
                alt="app.png"
              />
            </Link>
          </div>
        </div>
      </section>

      <section id="notifica">
        <div className="container">
          <p className="text-center">
            ¿No tienes cuenta? ¡Igual puedes informar!
            <br />
            &nbsp;
          </p>
          <div className="clearfix"></div>
          <p className="text-center">
            <a
              href="notificar.html"
              className="btn btn-danger btn-lg btn-danger"
            >
              Informar Situación
            </a>
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Home;
