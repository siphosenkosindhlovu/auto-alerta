import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/icono_nuevo.png';
import name from 'images/Luis2@3x.png';
import footerLogo from 'images/autoalerta@2x.png';
export default function Logo({ variant }) {
  let variantClassName = variant === 'header' ? 'logo--header' : 'logo--footer';

  return (
    <span className={`logo ${variantClassName}`}>
      {variant === 'header' ? (
        <>
          <img src={logo} alt="AutoAlerta Logo" className="logo__image" />
          <img src={name} alt="AutoAlerta" className="logo__text" />
        </>
      ) : (
        <>
          <img src={footerLogo} alt="AutoAlerta Logo" className="logo__image" />
        </>
      )}
    </span>
  );
}

Logo.propTypes = {
  variant: PropTypes.string,
};

Logo.defaultProps = {
  variant: 'header',
};
