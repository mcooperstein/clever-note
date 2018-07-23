import React, { Component } from "react";
import firebase from "firebase";
import { db } from "../firebase";

class Notes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.getNotebook(user["uid"], this.props.match.params.id).then(snapshot =>
          console.log(snapshot.val())
        );
      } else {
        window.location.href = "/";
        // if user is not logged in, go back to the home page
      }
    });
  }
  render() {
    return <p>Notes Page</p>;
  }
}

export default Notes;
