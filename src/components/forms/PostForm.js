import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../../actions/post';
import * as userActions from '../../actions/user';

class PostForm extends Component {
  render() {
    const { handleSubmit, user, onCancel } = this.props;

    return (
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <>
            {user &&
              <>
                <label>Author</label>
                <Field
                  name="userId"
                  component="select"
                >
                  <option disabled />
                  {user && <option value={user.id}>{user.name}</option>}
                </Field>
              </>
            }
          </>
        </div>
        <div className="field">
          <>
            <label>Title</label>
            <Field
              type="text"
              name="title"
              component="input"
            />
          </>
        </div>
        <div className="field">
          <>
            <label>Description</label>
            <Field
              name="body"
              component="textarea"
            />
          </>
        </div>
        <button className="ui button" type="submit">Submit</button>
        <button className="ui button" type="submit" onClick={onCancel}>Cancel</button>
      </form>
    )
  }
}

const ConnectedPostForm = connect(state => {
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
})(PostForm);

export default reduxForm({
  form: 'postForm'
})(ConnectedPostForm);
