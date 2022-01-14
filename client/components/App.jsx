/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import {
  HashRouter as Router,
  Link,
  Routes,
  Route,
  withRouter,
} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes id="main-app-content">
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
