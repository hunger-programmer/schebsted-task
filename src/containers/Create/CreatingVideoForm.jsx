import React from 'react';
import { connect } from 'react-redux';
import CreateVideoForm from '../../components/Create/CreateVideoForm';
import { createVideoAction, createVideoDataChanged } from '../../store/video/actions';

const mapStateToProps = ({ video }) => ({
  formErrors: video.createForm.formErrors,
  loading: video.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    const {
      name, value,
    } = event.target;

    dispatch(createVideoDataChanged({ [name]: value }));
  },
  onSubmit: (e) => {
    e.preventDefault();

    dispatch(createVideoAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVideoForm);
