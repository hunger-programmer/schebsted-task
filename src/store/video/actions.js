import { changeVideoStatus, createVideo, getVideos } from '../../services/videoService';

export const actions = {
  FETCH_REQUEST: '@@video/FETCH_REQUEST',
  FETCH_SUCCESS: '@@video/FETCH_SUCCESS',
  FETCH_ERROR: '@@video/FETCH_ERROR',

  STATUS_CHANGED_REQUEST: '@@video/STATUS_CHANGED_REQUEST',
  STATUS_CHANGED_SUCCESS: '@@video/STATUS_CHANGED_SUCCESS',
  STATUS_CHANGED_ERROR: '@@video/STATUS_CHANGED_ERROR',

  CREATE_VIDEO_DATA_CHANGED: '@@video/CREATE_VIDEO_DATA_CHANGED',

  CREATE_VIDEO_REQUEST: '@@video/CREATE_VIDEO_REQUEST',
  CREATE_VIDEO_SUCCESS: '@@video/CREATE_VIDEO_SUCCESS',
  CREATE_VIDEO_ERROR: '@@video/CREATE_VIDEO_ERROR',
};

// CreateVideo
export const createVideoDataChanged = formData => ({ type: actions.CREATE_VIDEO_DATA_CHANGED, formData });

const createVideoRequest = () => ({ type: actions.CREATE_VIDEO_REQUEST });
const createVideoSuccess = video => ({ type: actions.CREATE_VIDEO_SUCCESS, video });
const createVideoError = error => ({ type: actions.CREATE_VIDEO_ERROR, error });

export const createVideoAction = () => (dispatch, getState) => {
  dispatch(createVideoRequest());
  createVideo(getState().video.createForm).then(
    (response) => {
      dispatch(createVideoSuccess(response.data));
      window.location = '/';
    },
  ).catch(
    (error) => {
      dispatch(createVideoError(error.response.data));
    },
  );
};

// RequestVideos
const videosRequest = () => ({ type: actions.FETCH_REQUEST });
const videosRequestSuccess = data => ({ type: actions.FETCH_SUCCESS, data });
const videosRequestError = error => ({ type: actions.FETCH_ERROR, error });

export const fetchVideosAction = () => (dispatch) => {
  dispatch(videosRequest());
  getVideos().then(
    (response) => {
      dispatch(videosRequestSuccess(response.data));
    },
  ).catch(
    (error) => {
      dispatch(videosRequestError(error.message));
    },
  );
};

// ChangeStatus
const changeVideoStatusRequest = () => ({ type: actions.STATUS_CHANGED_REQUEST });
const changeVideoStatusSuccess = (id, status) => ({ type: actions.STATUS_CHANGED_SUCCESS, status, id });
const changeVideoStatusError = error => ({ type: actions.STATUS_CHANGED_ERROR, error });

export const changeVideoStatusAction = (id, status) => (dispatch) => {
  dispatch(changeVideoStatusRequest());
  changeVideoStatus(id, status).then(
    (response) => {
      const res = response.data;
      dispatch(changeVideoStatusSuccess(res.id, res.status));
    },
  ).catch(
    (error) => {
      dispatch(changeVideoStatusError(error.message));
    },
  );
};
