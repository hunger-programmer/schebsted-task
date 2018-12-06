import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../../components/VideoList/VideoList';

const mapStateToProps = ({ video }, ownProps) => ({
  videos: video.data.filter(videoElement => videoElement.status === ownProps.status),
  status: ownProps.status
});

export default connect(mapStateToProps)(VideoList);
