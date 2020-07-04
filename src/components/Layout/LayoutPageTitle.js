import React from 'react';
import PropTypes from 'prop-types';
const LayoutPageTitle = ({ chilren }) => <h1>{chilren}</h1>;

LayoutPageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPageTitle;
