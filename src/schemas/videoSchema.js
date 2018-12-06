import PropTypes from 'prop-types';
import { VIDEO_STATUSES } from '../../config';

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  status: PropTypes.oneOf(VIDEO_STATUSES),
});
