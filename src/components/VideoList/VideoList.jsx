import PropTypes from 'prop-types';
import React from 'react';
import { VIDEO_STATUSES } from '../../../config';

import videoSchema from '../../schemas/videoSchema';
import Video from './Video';

const VideoList = ({ videos, status }) => (
  <div className="d-flex flex-column align-items-center">
    <h1>
      {status}
    </h1>
    <div className="column">
      {videos.map(video => <Video video={video} key={video.id} />)}
    </div>
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.arrayOf(videoSchema),
  status: PropTypes.oneOf(VIDEO_STATUSES),
};

VideoList.defaultProps = {
  videos: [],
  status: '',
};

export default VideoList;
