import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader, Dimmer, Container, Header } from 'semantic-ui-react';
import * as postActions from '../../actions/post';

class PostDetailContainer extends Component {
  componentDidMount() {
    this.props.Post.loadPostByUserId(this.props.match.params.postId);
  }

  render() {
    const { post, isLoading } = this.props;
    return (
      <>
        {!post || isLoading ?
          <Dimmer active inverted>
            <Loader size='huge'>Loading...</Loader>
          </Dimmer>
				:
					<Container text>
            <Header as='h2'>{post.title}</Header>
            <p>
              {post.body}
            </p>
          </Container>
        }
      </>
    )
  }
}
const mapStateToProps = state => {
  const { posts: post, isLoading } = state.posts;
  return {
    post,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Post: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
