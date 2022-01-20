/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes id="main-app-content">
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
