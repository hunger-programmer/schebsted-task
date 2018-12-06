import PropTypes from 'prop-types';
import React from 'react';

const Error = ({ text }) => (
  <div className="page">
    {text}
  </div>
);

Error.propTypes = {
  text: PropTypes.string,
};

Error.defaultProps = {
  text: '',
};

export default Error;
