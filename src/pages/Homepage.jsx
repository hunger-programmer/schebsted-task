import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { VIDEO_STATUS_IN_USE, VIDEO_STATUS_NEW, VIDEO_STATUS_OLD } from '../../config';
import Error from '../components/Error';
import Loader from '../components/Loader';

import VideoListContainer from '../containers/VideoList/VideoListContainer';
import { fetchVideosAction } from '../store/video/actions';

class Homepage extends React.Component {
  componentDidMount() {
    const { fetchVideos } = this.props;
    fetchVideos();
  }

  render() {
    const { loading, error } = this.props;

    if (error) {
      return <Error text={error} />;
    }

    if (loading) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <div className="d-flex flex-column flex-md-row">
          <VideoListContainer status={VIDEO_STATUS_NEW} />

          <VideoListContainer status={VIDEO_STATUS_IN_USE} />

          <VideoListContainer status={VIDEO_STATUS_OLD} />
        </div>
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Homepage.defaultProps = {
  error: '',
};

const mapStateToProps = ({ video }) => ({
  error: video.error,
  loading: video.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => { dispatch(fetchVideosAction()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
