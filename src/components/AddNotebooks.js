import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { db } from "../firebase";
import firebase from "firebase";
import Navigation from "./Navigation";

class AddNotebooks extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // const { email, password } = this.state;
    // console.log(`${email}, ${password}`);
    // const data = { email };
    var userId = firebase.auth().currentUser.uid;
    const name = this.getNotebookName.value;
    this.props.dispatch({
      type: "ADD_NOTEBOOK",
      data: name
    });
    db.addNotebook(userId, name);
    const { history } = this.props;
    history.push("/your-notebooks");
  };
  render() {
    return (
      <div>
        <Navigation />
        <h1>Add New Notebook</h1>
        <form onSubmit={this.handleSubmit}>
          <h3 id="form-title">Add Notebook</h3>
          <div className="form-group" id="sign-up-form">
            <label className="control-label">Name of Notebook:</label>
            <input
              className="form-control"
              ref={input => (this.getNotebookName = input)}
              type="text"
              placeholder="Notebook Name"
            />
            <button
              id="sign-up-button"
              type="submit"
              className="btn btn-success btn-block"
            >
              Create Notebook
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddNotebooks);
