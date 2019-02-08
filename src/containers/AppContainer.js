import React from 'react';
import { Container } from 'semantic-ui-react';
import UserListPageContainer from '../containers/pages/UserListPageContainer';

const AppContainer = () => (
  <Container style={{ marginTop: '4.5em'}}>
    <UserListPageContainer />
  </Container>
)

export default AppContainer;
