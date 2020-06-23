import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/icono_nuevo.png';
import name from 'images/Luis2.png';
export default function Logo({ variant }) {
  let variantClassName = variant === 'header' ? 'logo__header' : 'logo__footer';
  return (
    <span className={`logo ${variantClassName}`}>
      <img src={logo} alt="AutoAlerta Logo" className="logo__image" />
      <img src={name} alt="AutoAlerta" className="logo__text" />
    </span>
  );
}

Logo.propTypes = {
  variant: PropTypes.string,
};

Logo.defaultProps = {
  variant: 'header',
};
