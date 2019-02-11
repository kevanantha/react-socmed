import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button, Loader, Dimmer, Header, Grid } from 'semantic-ui-react';
import * as appActions from '../../actions/app';
import * as userActions from '../../actions/user';
import * as postActions from '../../actions/post';
import UserPosts from '../../components/user/UserPosts';
import PostForm from '../../components/forms/PostForm';

class UserDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      editedPost: null
    };

    this.onAdd = () => {
      this.setState({ isAdd: true });
    };

    this.onCancelAdd = () => {
      this.setState({ isAdd: false });
    };

    this.onCommitAdd = values => {
      return this.props.Post.create(values).then(res => {
        this.onCancelAdd();
        alert('post created');
      });
    };

    this.onEdit = post => () => {
      this.props.App.initForm('postForm', {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body
      });
      this.setState({ editedPost: post });
    };

    this.onCancelEdit = () => {
      this.setState({ editedPost: null });
    };

    this.onCommitEdit = post => {
      return this.props.Post.update(post, this.state.editedPost).then(() => {
        this.onCancelEdit();
        alert('post edited');
      });
    };

    this.onDelete = post => () => {
      return this.props.Post.destroy(post).then(() => {
        alert('post deleted');
      });
    };

  }

  componentDidMount() {
    this.props.Post.loadAllPostByUserId(this.props.match.params.userId);
    this.props.User.loadUserById(this.props.match.params.userId);
  }

  render() {
    const { posts, isLoadingPosts, isLoadingUsers } = this.props;
    const { user={} } = this.props;
    const { name } = user;
    const { editedPost } = this.state;

    return (
      <>
        {isLoadingUsers || isLoadingPosts || posts.length === 0 || user.length === 0 ?
          <Dimmer active inverted>
            <Loader size='huge'>Loading...</Loader>
          </Dimmer>
        :
          <>
            <div style={{ textAlign: "right" }}>
              <Modal
                trigger={<Button onClick={this.onAdd}>Create a Post</Button>}
                open={this.state.isAdd}
                onClose={this.onCancelAdd}
              >
                <Modal.Header>Create a Post</Modal.Header>
                <Modal.Content>
                  <PostForm
                    onCancel={this.onCancelAdd}
                    onSubmit={this.onCommitAdd}
                    user={user} 
                  />
                </Modal.Content>
              </Modal>
              <Modal
                open={editedPost !== null}
                onClose={this.onCancelEdit}
              >
                <Modal.Header>Edit a Post</Modal.Header>
                <Modal.Content>
                  <PostForm
                    onCancel={this.onCancelEdit}
                    onSubmit={this.onCommitEdit}
                    user={user}
                    posts={posts}
                  />
                </Modal.Content>
              </Modal>
            </div>
            {name && <Header as='h1' textAlign='center' style={{ marginBottom: 50 }}>Posts of {name}</Header>}
            <Grid columns={2} container>
              <Grid.Row>
                {posts.map(post => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <UserPosts
                      post={post}
                      onDelete={this.onDelete}
                      onEdit={this.onEdit}
                    />
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  const { posts, isLoading: isLoadingPosts } = state.posts;
  const { user, isLoading: isLoadingUsers } = state.users;
  return {
    posts,
    isLoadingPosts,
    user,
    isLoadingUsers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    App: bindActionCreators(appActions, dispatch),
    User: bindActionCreators(userActions, dispatch),
    Post: bindActionCreators(postActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer);
