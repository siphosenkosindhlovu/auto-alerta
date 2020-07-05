import React, { useEffect } from 'react';
import Hero from 'components/Hero';
import FilterSearch from 'components/FilterSearch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import robo from 'images/robo_Mesa de trabajo 1.svg';
import bus from 'images/bus_Mesa de trabajo 1.svg';
import label from 'images/label_Mesa de trabajo 1.svg';
import Carousel from 'react-bootstrap/Carousel';
import Slick from 'react-slick';
//import { Context } from '../store/appContext';
//import { Link } from 'react-router-dom';
//import moment from 'moment';

const Home = (props) => {
  //const { store } = useContext(Context);
  const settings = {};
  useEffect(() => {
    //if (!store.isAuthenticated) props.history.push("/login");
  });

  return (
    <>
      <Hero />
      <FilterSearch />
      <Container className="container-narrow">
        <h2 className="text-center page__heading">Informar es prevenir</h2>
        <p className="page__subtitle text-center">
          Ante estas situaciones informa y previene
        </p>
        <Row>
          <Col lg={6}>
            <h3>¿SI ALGUIEN INTENTA ROBAR UN AUTO?</h3>
            <div className="row">
              <Col xs="auto">
                <figure>
                  <img src={robo} alt="Robo" className="inform__img" />
                </figure>
              </Col>
              <div className="col-7">
                <p className="inform__text">
                  <ul>
                    <ol>
                      <li style={{ textDecoration: 'strikethough' }}>
                        Intervienes
                      </li>
                      <li>Llamas a carabineros</li>
                      <li>Contactas al dueño</li>
                    </ol>
                  </ul>
                </p>
                <p>
                  El tiempo es vital, utiliza{' '}
                  <span className="text-primary">
                    <strong>Auto Alerta</strong>
                  </span>
                  .
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h3>¿SI ALGUIEN INTENTA ROBAR UN AUTO?</h3>
            <div className="row">
              <figure className="col-5">
                <img src={bus} alt="Bus" className="img-fluid" />
              </figure>
              <div className="col-7">
                <p>
                  <ul>
                    <ol>
                      <li style={{ textDecoration: 'strikethough' }}>
                        Intervienes
                      </li>
                      <li>Informas al Ministerio de Transporte</li>
                      <li>Informas directamente a la empresa</li>
                    </ol>
                  </ul>
                </p>
                <p>¿Deseas lamentar o prevenir?</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <section
        class="bg-primary py-4 py-lg-5 text-white"
        style={{ position: 'relative' }}
      >
        <Container>
          <h2 className="page__heading text-center text-white">
            Somos Comunidad
          </h2>
          <p className="page__subtitle text-center">
            Ante estas situaciones informa y previene
          </p>
          <div>
            <p>
              Al pertenecer a <strong>Auto Alerta</strong>, estarás formando
              parte de la primera comunidad fundada entre automovilistas
              solidarios preocupados en hacer de las calles un lugar más seguro
              para el transporte, logrando de forma colaborativa ayudar a otros
              y eventualmente ser informado de situaciones que pueden ocurrir
              mientras no estás cerca de tu vehículo (hurtos, descuidos y más).
            </p>
            <p>
              Enviamos notificaciones preventivas pre-configuradas en tiempo
              real que permiten al propietario de todo vehículo registrado
              realizar mejoras correctivas, ofreciendo la posibilidad de
              prevenir diversas situaciones.
              <br />
              Tranquilo, son anónimas.
            </p>
            <p>Servicio GRATUITO.</p>
          </div>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2 className="page__heading text-center">Algunas situaciones</h2>
          <p className="page__subtitle text-center">
            Ejemplo de algunas de las situaciones en las que podrías verte
            involucrado.
          </p>
          <Row>
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src={robo}></Card.Img>
                <Card.Body>
                  <Card.Title className="text-muted text-center">
                    ROBO
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h2>
            ¿Cómo funciona?
            <small>Ante estas situaciones informa y previene</small>
          </h2>
          <Carousel>
            <Carousel.Item></Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <Container>
        <h2 className="text-center">
          ¡Próximamente!
          <small className="subtitle">
            Estamos trabajando para tener las versiones en Android y iPhone
          </small>
        </h2>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <section>
        <Container>
          <div>
            <div>
              <h3 className="text-primary">
                ¿Quieres informar alguna situación pero no tienes cuenta?
              </h3>
              <p>
                Puedes Informarla de todas formas, ingresando los datos
                solicitados.
              </p>
            </div>
            <div>
              <button className="btn btn-primary btn-lg">Informar</button>
            </div>
          </div>
        </Container>
      </section>
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
