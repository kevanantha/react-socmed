import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AppContainer} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
