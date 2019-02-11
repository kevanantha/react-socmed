import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../../actions/post';
import * as userActions from '../../actions/user';

class CommentForm extends Component {
  render() {
    const { handleSubmit, onCancel } = this.props;

    return (
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <>
            <label>Name</label>
            <Field
              type="text"
              name="name"
              component="input"
              placeholder="Your name"
            />
          </>
        </div>
        <div className="field">
          <>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              component="input"
              placeholder="Your email"
            />
          </>
        </div>
        <div className="field">
          <>
            <label>Comment</label>
            <Field
              name="body"
              component="textarea"
              placeholder="Write your comment here..."
            />
          </>
        </div>
        <button className="ui button" type="submit">Submit</button>
        <button className="ui button" type="submit" onClick={onCancel}>Cancel</button>
      </form>
    )
  }
}

const ConnectedCommentForm = connect(state => {
  const { users, isLoading: isLoadingUser } = state.users;
  return {
    users,
    isLoadingUser
  }
}, dispatch => {
  return {
    Post: bindActionCreators(postActions, dispatch),
    User: bindActionCreators(userActions, dispatch)
  }
})(CommentForm)
export default reduxForm({
  form: 'commentForm'
})(ConnectedCommentForm);
