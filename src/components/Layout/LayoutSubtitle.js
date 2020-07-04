import React from 'react';
import PropTypes from 'prop-types';

const LayoutSubtitle = ({ children }) => (
  <p className="page__subtitle">{children}</p>
);

LayoutSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutSubtitle;
