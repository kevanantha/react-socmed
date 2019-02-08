import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../../actions/post';

class PageListPageContainer extends Component {
  componentDidMount() {
    this.props.Post.loadAll();
  }

  render() {
    return <h1>page container</h1>
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Post: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageListPageContainer);
