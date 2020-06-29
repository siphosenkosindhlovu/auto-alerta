import React from 'react';
import PropTypes from 'prop-types';
export default function Banner({ children }) {
  return (
    <div className="banner bg-primary text-center py-2 text-white">
      {children}
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.element,
};
