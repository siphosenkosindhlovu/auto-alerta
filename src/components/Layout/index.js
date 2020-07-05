import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import LayoutPageHeader from './LayoutPageTitle';
import LayoutSubHeader from './LayoutSubtitle';
export default function Layout({ header, subtitle, children }) {
  return (
    <>
      <Container>
        <LayoutPageHeader>{header}</LayoutPageHeader>
        <LayoutSubHeader>{subtitle}</LayoutSubHeader>
        <hr />
      </Container>
      <Container>{children}</Container>
    </>
  );
}

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  subheader: PropTypes.element.isRequired,
  children: PropTypes.element,
};
