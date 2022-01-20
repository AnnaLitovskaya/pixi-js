import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      // user: {},
    };
  }

  render() {
    return (
      <div id="signin-wrapper">
        <span className="form-title">Username</span>
        <input type="text" required className="form-input" />
        <span className="form-title">Password</span>
        <input type="password" required className="form-input" />
      </div>
    );
  }
}

export default SignIn;
