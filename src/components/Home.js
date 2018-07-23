import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpPage from "./SignUpPage";
import { auth } from "../firebase";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }
  componentDidMount() {
    auth.doSignOut;
  }
  render() {
    return (
      <div id="home-container">
        <h1 id="home-title">CleverNote App</h1>
        <SignUpPage />
      </div>
    );
  }
}

export default Home;
