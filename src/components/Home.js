import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div id="home-container">
        <h1 id="home-title">CleverNote App</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Home;
