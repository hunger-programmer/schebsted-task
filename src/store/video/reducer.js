import { VIDEO_STATUS_NEW } from '../../../config';
import { actions } from './actions';

const initialState = {
  createForm: {
    title: '',
    comment: '',
    url: '',
    status: VIDEO_STATUS_NEW,
    formErrors: [],
  },
  data: [],
  error: undefined,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_VIDEO_REQUEST: {
      return { ...state, loading: true };
    }
    case actions.CREATE_VIDEO_ERROR: {
      return {
        ...state,
        createForm: {
          ...state.createForm,
          formErrors: action.error
        },
        loading: false
      };
    }
    case actions.CREATE_VIDEO_SUCCESS: {
      return { ...state, loading: false };
    }

    case actions.CREATE_VIDEO_DATA_CHANGED: {
      return { ...state, createForm: { ...state.createForm, ...action.formData } };
    }

    case actions.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case actions.FETCH_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    case actions.FETCH_SUCCESS: {
      return { ...state, data: [...action.data], loading: false };
    }

    case actions.STATUS_CHANGED_REQUEST: {
      return { ...state, loading: true };
    }
    case actions.STATUS_CHANGED_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    case actions.STATUS_CHANGED_SUCCESS: {
      const newState = { ...state };

      const changeStatusCallback = (video) => {
        if (video.id === action.id) {
          video.status = action.status;
        }
      };

      newState.data.forEach(changeStatusCallback);

      return { ...newState, loading: false };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
