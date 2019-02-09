import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import { Container } from 'semantic-ui-react';

import AppContainer from './containers/AppContainer';
import UserDetailContainer from './containers/pages/UserDetailContainer';
import PostDetailContainer from './containers/pages/PostDetailContainer';
import UserAlbumDetailContainer from './containers/pages/UserAlbumDetailContainer';
import AlbumDetailContainer from './containers/pages/AlbumDetailContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Container style={{ marginTop: '5em'}}>
            <Switch>
              <Route exact path="/" component={AppContainer} />
              <Route exact path="/users/:id/posts" component={UserDetailContainer} />
              <Route exact path="/users/:userId/posts/:postId" component={PostDetailContainer} />
              <Route exact path="/users/:userId/albums" component={UserAlbumDetailContainer} />
              <Route exact path="/users/:userId/albums/:albumId/photos" component={AlbumDetailContainer} />
            </Switch>
          </Container>
        </>
      </Router>
    );
  }
}

export default App;
