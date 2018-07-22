import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Clever Note
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/your-notebooks">
                Your Notebooks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-notebook">
                Create New Notebook
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
