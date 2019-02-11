import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader, Dimmer, Container, Header, Comment, Button, Modal } from 'semantic-ui-react';
import * as appActions from '../../actions/app';
import * as postActions from '../../actions/post';
import * as commentActions from '../../actions/comment';
import PostComments from '../../components/posts/PostComments';
import CommentForm from '../../components/forms/CommentForm';

class PostDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      editedComment: null
    };

    this.onAdd = () => {
      const { post: { id } } = this.props;
      this.props.App.initForm('commentForm', { postId: id });
      this.setState({ isAdd: true });
    };

    this.onCancelAdd = () => {
      this.setState({ isAdd: false });
    };

    this.onCommitAdd = values => {
      return this.props.Comment.create(values).then(res => {
        this.onCancelAdd();
        alert('post created');
      });
    };

    this.onEdit = comment => () => {
      this.props.App.initForm('commentForm', {
        id: comment.id,
        postId: comment.postId,
        email: comment.email,
        name: comment.name,
        body: comment.body
      });
      this.setState({ editedComment: comment });
    };

    this.onCancelEdit = () => {
      this.setState({ editedComment: null });
    };

    this.onCommitEdit = comment => {
      return this.props.Comment.update(comment, this.state.editedComment).then(() => {
        this.onCancelEdit();
        alert('comment edited');
      });
    };

    this.onDelete = comment => () => {
      return this.props.Comment.destroy(comment).then(() => {
        alert('comment deleted');
      });
    };
  }

  componentDidMount() {
    this.props.Post.loadPostByUserId(this.props.match.params.postId);
    this.props.Comment.loadAllCommentsByUserId(this.props.match.params.postId);
  }

  render() {
    const { post, isLoadingPost, comments, isLoadingComment } = this.props;
    const { editedComment } = this.state;
    return (
      <>
        {!post || isLoadingPost || !comments || isLoadingComment ?
          <Dimmer active inverted>
            <Loader size='huge'>Loading...</Loader>
          </Dimmer>
	      :
	        <Container text>
            <Header as='h2'>{post.title}</Header>
            <p>{post.body}</p>
						
	          <Comment.Group style={{ marginTop: 70 }}>
              <Header as='h3' dividing>
                Comments
              </Header>

              {comments.map(comment => (
                <Comment key={comment.id}>
                  <PostComments
                    comment={comment}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                  />
                </Comment>
              ))}

              <Modal
                trigger={
                  <Button
                    onClick={this.onAdd}
                    style={{ marginTop: 15 }}
                  >
                    Add Comment
                  </Button>
                }
                open={this.state.isAdd}
                onClose={this.onCancelAdd}
              >
                <Modal.Header>Create a Comment</Modal.Header>
                <Modal.Content>
                  <CommentForm
                    onCancel={this.onCancelAdd}
                    onSubmit={this.onCommitAdd}
                  />
                </Modal.Content>
              </Modal>
              <Modal
                open={editedComment !== null}
                onClose={this.onCancelEdit}
              >
                <Modal.Header>Edit a Comment</Modal.Header>
                <Modal.Content>
                  <CommentForm
                    onCancel={this.onCancelEdit}
                    onSubmit={this.onCommitEdit}
                  />
                </Modal.Content>
              </Modal>
            </Comment.Group>
          </Container>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  const { post, isLoadingPost } = state.posts;
  const { comments, isLoading: isLoadingComment } = state.comments;
  return {
    post,
    isLoadingPost,
    comments,
    isLoadingComment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    App: bindActionCreators(appActions, dispatch),
    Post: bindActionCreators(postActions, dispatch),
    Comment: bindActionCreators(commentActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
