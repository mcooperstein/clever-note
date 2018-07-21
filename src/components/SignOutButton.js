import React, { Component } from "react";
import { auth } from "../firebase";

class SignOutButton extends Component {
  refresh() {
    setTimeout(window.location.reload(), 1000); // To force refresh the page after signing out
  }
  render() {
    return (
      <div onClick={this.refresh}>
        <button className="btn btn-danger" onClick={auth.doSignOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

export default SignOutButton;
