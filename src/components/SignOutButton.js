import React, { Component } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

class SignOutButton extends Component {
  refresh() {
    setTimeout(window.location.reload(), 1000); // To force refresh the page after signing out
  }
  render() {
    return (
      <div onClick={this.refresh}>
        {/* <button className="btn btn-danger" onClick={auth.doSignOut}>
          Sign Out
        </button> */}
        <Link to="/">
          <button className="btn btn-danger">Sign Out</button>
        </Link>
      </div>
    );
  }
}

export default SignOutButton;
