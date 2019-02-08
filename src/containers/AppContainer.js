import React from 'react';
import { Container } from 'semantic-ui-react';
import PostListPageContainer from '../containers/pages/PostListPageContainer';

const AppContainer = () => (
  <Container style={{ marginTop: '7em'}}>
    <PostListPageContainer />
  </Container>
)

export default AppContainer;
