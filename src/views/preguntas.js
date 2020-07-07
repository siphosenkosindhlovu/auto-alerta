import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import Card from 'react-bootstrap/Card';
import Layout from 'components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Toggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card.Header onClick={decoratedOnClick}>
      {children}
      <FontAwesomeIcon
        icon="chevron-down"
        rotation={isCurrentEventKey ? 180 : 0}
        className="text-primary"
      />
    </Card.Header>
  );
}

const Preguntas = (props) => {
  const preguntasFrecuentes = [
    {
      title: `&iquest; Cual es el beneficio de tener la aplicaci&oacute;n instalada?`,
      body: `Ideal para conductores, el beneficio es&nbsp;poder estar conectados a su vehiculo&nbsp;en todo momento.`,
    },
    {
      title: `&iquest; Es necesario tener la aplicaci&oacute;n para enviar una alerta?`,
      body: `No, ya que siempre podr&aacute;n ir a la <a href="http://www.autoalerta.cl/" rel="noopener noreferrer" target="_blank">p&aacute;gina de inicio</a> e informar lo que est&aacute;n presenciando.`,
    },
    {
      title: `&iquest; Las alertas son privadas?`,
      body: `Si, desde que te inscribes, antes son p&uacute;blicas para buscar al propietario por redes sociales.`,
    },
    {
      title: `&iquest; Si quiero inscribir m&aacute;s de una patente ?`,
      body: `Debes invitar a tus contactos para as&iacute; fortalecer la comunicaci&oacute;n entre automovilistas.`,
    },
    {
      title: `&iquest; Si tengo un veh&iacute;culo con carro que debo hacer?`,
      body: `Inscribir las patentes por separado.`,
    },
  ];
  return (
    <Layout
      header="Preguntas Frecuentes"
      subtitle="Si tienes dudas o comentarios de alguna situación importante."
    >
      <section>
        <Accordion className="faq">
          {preguntasFrecuentes.map(({ title, body }, index) => {
            return (
              <Card>
                <Toggle eventKey={index}>
                  <div dangerouslySetInnerHTML={{ __html: title }} />
                </Toggle>

                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: body }}></p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </section>
      {/* <section id="page">
            <div className="container">


                <h1>Preguntas Frecuentes</h1>
                <hr />
                <p>Actualmente, <span className="marker"><a
                    href="http://www.latercera.com/noticia/balance-de-carabineros-asegura-que-102-autos-son-robados-al-dia-en-chile/"
                    target="_blank" rel="noopener noreferrer">102 autos son robados al d&iacute;a en Chile</a></span>, 4 son recuperados en el momento,
        72&nbsp;son recuperados siendo desmantelados y 26 nunca son encontrados.&nbsp;</p>

                <hr />
                <pre>
                    1. &iquest; Cual es el beneficio de tener la aplicaci&oacute;n instalada?</pre>

                <p>Ideal para conductores, el beneficio es&nbsp;poder estar conectados a su vehiculo&nbsp;en todo momento.</p>

                <pre>
                    2. &iquest; Es necesario tener la aplicaci&oacute;n para enviar una alerta?</pre>

                <p>No, ya que siempre podr&aacute;n ir a la <a href="http://www.autoalerta.cl/" rel="noopener noreferrer" target="_blank">p&aacute;gina de
          inicio</a> e informar lo que est&aacute;n presenciando.</p>

                <pre>
                    3. &iquest;Las alertas son privadas?</pre>

                <p>Si, desde que te inscribes, antes son p&uacute;blicas para buscar al propietario por redes sociales.</p>

                <pre>
                    4. &iquest; Si quiero inscribir m&aacute;s de una patente ?</pre>

                <p>Debes invitar a tus contactos para as&iacute; fortalecer la comunicaci&oacute;n entre automovilistas.</p>

                <pre>
                    5. &iquest; Si tengo un veh&iacute;culo con carro que debo hacer?</pre>

                <p>Inscribir las patentes por separado.</p>
                <hr />
                <p className="lead">¿No encontraste lo que buscabas? <a href="contacto.html">¡Contáctanos!</a></p>
            </div>
        </section> */}
    </Layout>
  );
};

export default Preguntas;
