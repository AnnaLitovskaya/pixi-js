/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div id="main-app-content">
          {/* <Route exact path="/" component={Home} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
