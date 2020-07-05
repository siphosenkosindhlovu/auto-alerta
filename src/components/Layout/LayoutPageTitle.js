import React from 'react';
import PropTypes from 'prop-types';
const LayoutPageTitle = ({ children }) => (
  <h1 className="page__heading">{children}</h1>
);

LayoutPageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPageTitle;
