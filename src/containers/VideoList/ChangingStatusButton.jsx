import React from 'react';
import { connect } from 'react-redux';
import statusSaga from '../../../server/services/statusSaga';
import Button from '../../components/Common/Button';
import { changeVideoStatusAction } from '../../store/video/actions';

const mapStateToProps = () => ({
  text: 'Change status →',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (e) => {
    dispatch(changeVideoStatusAction(ownProps.id, statusSaga[ownProps.status]));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
