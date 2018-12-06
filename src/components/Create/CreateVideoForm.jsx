import PropTypes from 'prop-types';
import React from 'react';
import errorSchema from '../../schemas/errorSchema';

const CreateVideoForm = ({
                           onSubmit, onChange, formErrors, loading,
                         }) => {
  const extractErrors = name => (formErrors.find(error => error.param === name) || {}).msg;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">
          Title
        </label>

        <input
          type="text"
          id="title"
          className="form-control"
          onChange={onChange}
          placeholder="Insert title..."
          name="title"
        />

        <em>
          {extractErrors('title')}
        </em>
      </div>

      <div className="form-group">
        <label htmlFor="url">
          Video Url Address
        </label>

        <input
          type="text"
          id="url"
          className="form-control"
          onChange={onChange}
          placeholder="Paste YT link here"
          name="url"
        />

        <em>
          {extractErrors('url')}
        </em>
      </div>

      <div className="form-group">
        <label htmlFor="comment">
          Comment
        </label>

        <input
          type="text"
          id="comment"
          className="form-control"
          onChange={onChange}
          placeholder="Add some comment if you want ;)"
          name="comment"
        />

        <em>
          {extractErrors('comment')}
        </em>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

CreateVideoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.shape(errorSchema)),
};

CreateVideoForm.defaultProps = {
  formErrors: [],
};

export default CreateVideoForm;
