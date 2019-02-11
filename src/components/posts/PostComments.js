import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

class PostComments extends Component {
  render() {
    const { comment, onDelete, onEdit } = this.props;
    return (
      <Comment.Content>
        <Comment.Author as="a">{comment.name}</Comment.Author>
        <Comment.Metadata>
          <div>{comment.email}</div>
        </Comment.Metadata>
        <Comment.Text>{comment.body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action onClick={onEdit(comment)}>Edit</Comment.Action>
          <Comment.Action onClick={onDelete(comment)}>Delete</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    )
  }
}

export default PostComments;
