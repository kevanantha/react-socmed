import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import { Container } from 'semantic-ui-react';

import UserListPageContainer from './containers/pages/UserListPageContainer';
import UserPostDetailContainer from './containers/pages/UserPostDetailContainer';
import PostDetailContainer from './containers/pages/PostDetailContainer';
import UserAlbumDetailContainer from './containers/pages/UserAlbumDetailContainer';
import AlbumDetailContainer from './containers/pages/AlbumDetailContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Container style={{ marginTop: "5em"}}>
            <Switch>
              <Route exact path="/react-socmed" component={UserListPageContainer} />
              <Route exact path="/react-socmed/users/:userId/posts" component={UserPostDetailContainer} />
              <Route exact path="/react-socmed/users/:userId/posts/:postId" component={PostDetailContainer} />
              <Route exact path="/react-socmed/users/:userId/albums" component={UserAlbumDetailContainer} />
              <Route exact path="/react-socmed/users/:userId/albums/:albumId/photos" component={AlbumDetailContainer} />
            </Switch>
          </Container>
        </>
      </Router>
    );
  }
}

export default App;
