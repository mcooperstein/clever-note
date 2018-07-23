import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { db } from "../firebase";
import Navigation from "./Navigation";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("new mounted");
    console.log(this.props);
    const { onSignIn } = this.props;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var userId = firebase.auth().currentUser.uid;
        db.getUser(userId).then(snapshot => {
          console.log(snapshot.val().email);
          let email = snapshot.val().email;
          console.log(userId);
          onSignIn(email, userId);
          // this.props.dispatch({
          //   type: "SIGN_IN",
          //   email: snapshot.val().email,
          //   userId
          // });
        });
      } else {
        // No user is signed in.
        console.log("No User Logged In");
      }
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Navigation />
        <p>Email: {this.props.user.email}</p>
        <p>User Id: {this.props.user.userId}</p>
        <h1 style={styles.header}>Dashboard Page</h1>
      </div>
    );
  }
}

const styles = {
  header: {
    textAlign: "center",
    marginTop: 50
  }
};

const mapStateToProps = state => {
  return {
    user: state
  };
};

const mapDispatchToProps = dispatch => ({
  onSignIn: (email, userId) => dispatch({ type: "SIGN_IN", email, userId })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
// export default connect()(Dashboard);
