import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

export default function Layout({ title, subtitle, children }) {
  return (
    <>
      <Container>
        {title}
        {subtitle}
        <hr />
      </Container>
      {children}
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.elementType.isRequired,
  subtitle: PropTypes.elementType.isRequired,
  children: PropTypes.element,
};
