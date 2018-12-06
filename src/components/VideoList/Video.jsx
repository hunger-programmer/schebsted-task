import React from 'react';
import { Collapse } from 'react-collapse';

import ChangingStatusButton from '../../containers/VideoList/ChangingStatusButton';

import videoSchema from '../../schemas/videoSchema';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { video } = this.props;
    const { isOpen } = this.state;

    return (
      <div onClick={this.toggle} className="video mb-3 cursor-pointer">
        <h2 className="video__title">
          {video.title}
        </h2>

        <Collapse isOpened={isOpen}>
          {isOpen
          && (
            <iframe
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${video.url}`}
              frameBorder="0"
              allowFullScreen
              title={video.id}
            />
          )
          }

          <span className="video__comment">
            {`Comment: ${video.comment}`}
          </span>

          <div className="mt-3 pb-3">
            <ChangingStatusButton id={video.id} status={video.status} />
          </div>
        </Collapse>
      </div>
    );
  }
}

Video.propTypes = {
  video: videoSchema.isRequired,
};

export default Video;
