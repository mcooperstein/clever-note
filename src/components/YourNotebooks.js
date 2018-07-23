import React, { Component } from "react";
import withAuthorization from "./withAuthorization";
import { db, auth, firebase } from "../firebase/";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Notebook from "./Notebook";

class YourNotebooks extends Component {
  constructor(props) {
    super(props);
  }
  accountUpdate() {
    console.log(this.props);
    const { onGetNotebooks, onSignIn } = this.props;

    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        db.getUser(user.uid).then(snapshot => {
          let email = snapshot.val().email;
          onSignIn(email, user.uid);
        });
        db.yourNotebooks(user["uid"]).then(
          snapshot => {
            console.log(snapshot.val());
            if (snapshot.val() !== null) {
              let notebooks = Object.values(snapshot.val());
              //   console.log(notebooks);
              let notebookNames = notebooks.map(name => {
                return name.notebook;
              });
              console.log(notebookNames);
              onGetNotebooks(notebookNames);
            }
          }
          //   console.log(JSON.parse(JSON.stringify(snapshot.val())))
        );
        // onSetNotebooks(snapshot.val()))
        //console.log(Object.values(snapshot.val()).sort((a,b)=>a.ranking-b.ranking)))
      } else {
      }
    });
  }
  componentDidMount() {
    this.accountUpdate();
  }             
  render() {
    return (
      <div>
        <Navigation />
        <h1>{this.props.user.email}'s Notebooks</h1>
          {this.props.user.notebooks.map(notebook => {
                <Notebook name={notebook} />
          })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetNotebooks: yournotebooks =>
    dispatch({ type: "NOTEBOOKS_GET", data: yournotebooks }),
  onSignIn: (email, userId) => dispatch({ type: "SIGN_IN", email, userId })
});

const mapStateToProps = state => {
  return {
    user: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourNotebooks);
