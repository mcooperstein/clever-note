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
              let notebookValues = Object.values(snapshot.val());
              let notebookKeys = Object.keys(snapshot.val());
              console.log(notebookKeys);
              let notebookNames = notebookValues.map(name => {
                return name.notebook;
              });
              console.log(notebookNames);
              onGetNotebooks(notebookNames);
              //   onGetNotebooks(snapshot.val());
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
        {this.props.user.notebooks.length > 0 ? (
          this.props.user.notebooks.map((notebook, i) => {
            return (
              <div key={i}>
                <Notebook name={notebook} />
              </div>
            );
          })
        ) : (
          //   Object.keys(this.props.user.notebooks).map(key => {
          //     return <p>{key}</p>;
          //   })
          <p>You have No Notebooks</p>
        )}
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
