import React, { useEffect } from 'react';
import Hero from 'components/Hero';
import FilterSearch from 'components/FilterSearch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import robo from 'images/robo_Mesa de trabajo 1.svg';
import accidente from 'images/accidente_Mesa de trabajo 1.svg';
import descuido from 'images/descuido_Mesa de trabajo 1.svg';
import bus from 'images/bus_Mesa de trabajo 1.svg';
import label from 'images/label_Mesa de trabajo 1.svg';
import Slider from 'react-slick';
import slide1 from 'images/Captura de Pantalla 2020-04-29 a la(s) 20.33.32.png';
import slide2 from 'images/Captura de Pantalla 2020-04-29 a la(s) 20.34.29.png';
import slide3 from 'images/Captura de Pantalla 2020-04-29 a la(s) 20.35.39.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = (props) => {
    //const { store } = useContext(Context);
    useEffect(() => {
        //if (!store.isAuthenticated) props.history.push("/login");
    });
    const situaciones = [
        {
            image: robo,
            label: 'ROBO',
        },
        {
            image: accidente,
            label: 'ACCIDENTES',
        },
        {
            image: descuido,
            label: 'DESCUIDOS',
        },
    ];

    const slides = [
        {
            image: slide1,
            alt: 'Antes: Véhiculo previamente inscrito',
        },
        {
            image: slide2,
            alt: 'Durante: Proprietario del vehiculo recibe alerta',
        },
        {
            image: slide3,
            alt: 'Después: Podràs protegerte a tiempo',
        },
    ];
    const sliderSettings = {
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        className: 'slider',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    return (
        <>
            <Hero />
            <FilterSearch />
            <Container className="container-narrow py-5">
                <h2 className="text-center page__heading">
                    Informar es prevenir
                </h2>
                <p className="page__subtitle text-center mb-5">
                    Ante estas situaciones informa y previene
                </p>
                <Row>
                    <Col lg={6}>
                        <h3 className="h6 mb-5">
                            ¿SI ALGUIEN INTENTA ROBAR UN AUTO?
                        </h3>
                        <div className="d-flex">
                            <figure className="pr-2 pr-md-3">
                                <img
                                    src={robo}
                                    alt="Robo"
                                    className="inform__img"
                                />
                            </figure>
                            <div className="inform__text">
                                <p className="">
                                    <ol className="list-alphabet">
                                        <li
                                            style={{
                                                textDecoration: 'strikethough',
                                            }}
                                        >
                                            Intervienes
                                        </li>
                                        <li>Llamas a carabineros</li>
                                        <li>Contactas al dueño</li>
                                    </ol>
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
                    <div className="seperator d-lg-none my-5 mx-auto"></div>
                    <Col lg={6}>
                        <h3 className="h6 mb-5">
                            ¿SI ALGUIEN INTENTA ROBAR UN AUTO?
                        </h3>
                        <div className="d-flex">
                            <figure className="pr-2 pr-md-3">
                                <img
                                    src={bus}
                                    alt="Bus"
                                    className="inform__img"
                                />
                            </figure>
                            <div className="inform__text">
                                <p>
                                    <ol className="list-alphabet">
                                        <li
                                            style={{
                                                textDecoration: 'strikethough',
                                            }}
                                        >
                                            Intervienes
                                        </li>
                                        <li>
                                            Informas al Ministerio de Transporte
                                        </li>
                                        <li>
                                            Informas directamente a la empresa
                                        </li>
                                    </ol>
                                </p>
                                <p>¿Deseas lamentar o prevenir?</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <section className="community">
                <Container
                    className=" py-4 py-lg-5"
                    style={{ position: 'relative' }}
                >
                    <img
                        src={label}
                        alt="¡SERVICIO GRATUITO!"
                        className="community__label"
                    />
                    <h2 className="page__heading text-center text-white mt-0">
                        Somos Comunidad
                    </h2>
                    <p className="page__subtitle text-center">
                        Ante estas situaciones informa y previene
                    </p>
                    <div>
                        <p>
                            Al pertenecer a <strong>Auto Alerta</strong>,
                            estarás formando parte de la primera comunidad
                            fundada entre automovilistas solidarios preocupados
                            en hacer de las calles un lugar más seguro para el
                            transporte, logrando de forma colaborativa ayudar a
                            otros y eventualmente ser informado de situaciones
                            que pueden ocurrir mientras no estás cerca de tu
                            vehículo (hurtos, descuidos y más).
                        </p>
                        <p>
                            Enviamos notificaciones preventivas pre-configuradas
                            en tiempo real que permiten al propietario de todo
                            vehículo registrado realizar mejoras correctivas,
                            ofreciendo la posibilidad de prevenir diversas
                            situaciones.
                            <br />
                            Tranquilo, son anónimas.
                        </p>
                        <p>Servicio GRATUITO.</p>
                    </div>
                </Container>
            </section>
            <section className="py-5">
                <Container className="container-narrow">
                    <h2 className="page__heading text-center">
                        Algunas situaciones
                    </h2>
                    <p className="page__subtitle text-center pb-md-5">
                        Ejemplo de algunas de las situaciones en las que podrías
                        verte involucrado.
                    </p>
                    <Row>
                        {situaciones.map(({ image, label }) => (
                            <Col lg={4}>
                                <Card className="situations__card">
                                    <Card.Img
                                        variant="top"
                                        src={image}
                                        className="situations__card__img"
                                    ></Card.Img>
                                    <Card.Body className="pb-0">
                                        <Card.Title className="text-muted text-center situations__card__label">
                                            {label}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className="text-center py-5 bg-white">
                <Container fluid style={{ overflowX: 'hidden' }}>
                    <h2 className="page__heading">¿Cómo funciona?</h2>
                    <p className="page__subtitle">
                        Ante estas situaciones informa y previene
                    </p>
                    <Slider {...sliderSettings}>
                        {slides.map(({ image, alt }) => (
                            <div className="slider__inner">
                                <img src={image} alt={alt} />
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
            <Container className="text-center py-5">
                <h2 className="page__heading">¡Próximamente!</h2>
                <p className="page__subtitle">
                    Estamos trabajando para tener las versiones en Android y
                    iPhone
                </p>
                <div className="d-flex justify-content-center">
                    <a href="/" className="app-store">
                        <FontAwesomeIcon
                            icon={['fab', 'google-play']}
                            className="app-store__icon"
                        />
                        Google Play
                    </a>
                    <a href="/" className="app-store">
                        <FontAwesomeIcon
                            icon={['fab', 'apple']}
                            className="app-store__icon"
                        />{' '}
                        App Store
                    </a>
                </div>
            </Container>
            <section className="py-5 bg-white">
                <Container className="container-narrow">
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <div className="text-center text-lg-left">
                            <h3 className="text-primary h4">
                                ¿Quieres informar alguna situación pero no
                                tienes cuenta?
                            </h3>
                            <p class="page__subtitle">
                                Puedes Informarla de todas formas, ingresando
                                los datos solicitados.
                            </p>
                        </div>
                        <div className="mx-4">
                            <button className="btn btn-primary btn-lg btn-long">
                                Informar
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
