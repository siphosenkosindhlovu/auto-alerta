import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Hero() {
  return (
    <section class="hero">
      <div class="hero__filter"></div>
      {/* <img
        src={heroImage}
        alt="Person breaking into vehicle"
        className="hero__background"
      /> */}
      <Container className="hero__content text-center">
        <Row>
          <Col xl={{ offset: 5 }}>
            <h1 className="hero__title mb-3 mb-xl-4">
              ¡No más robo de vehículos!
            </h1>
            <a href="/registro" className="btn btn-primary hero__cta">
              Registrate
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
