import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick} className="btn btn-secondary">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
