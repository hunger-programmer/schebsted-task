import PropTypes from 'prop-types';

export default PropTypes.shape({
  location: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});
