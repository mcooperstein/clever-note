import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";
import { auth, db } from "../firebase/index";
// import {
//   doSignInWithEmailAndPassword,
//   doCreateUserWithEmailAndPassword
// } from "../firebase/auth";
import { connect } from "react-redux";

// const SignUpPage = ({ history }) => (
//   <div>
//     <LoginForm history={history} />
//   </div>
// );

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    // const { email, password } = this.state;
    // console.log(`${email}, ${password}`);
    // const data = { email };
    const { history } = this.props;
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    // const userId = this.props.dispatch({
    //   type: "SIGN_IN",
    //   email,
    //   userId
    // });
    this.setState({ error: "" });
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        auth
          .doCreateUserWithEmailAndPassword(email, password)
          //   .then(this.onCreateNewUser)
          .then(authUser => {
            db.doCreateUser(authUser.user.uid, email).then(() => {
              this.props.dispatch({
                type: "SIGN_IN",
                email,
                userId: authUser.user.uid
              });
              history.push("/dashboard");
            });
            // console.log(authUser);
          })
          .catch(this.onLoginFail);
      });
  };

  onLoginFail = () => {
    // this.setState({
    //   error: "Authentication failed"
    // });
    alert("fail");
  };

  onLoginSuccess = () => {
    const { history } = this.props;
    console.log(history);
    const email = this.getEmail.value;
    this.props.dispatch({
      type: "SIGN_IN",
      email
    });
    // console.log(userId);
    // db.doCreateUser(this.state.email,this.state.password)
    //   .then(() => {
    //     this.setState({
    //       email: "",
    //       password: "",
    //       error: ""
    //     });
    //     history.push("/");
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });
    history.push("/dashboard");
    // alert("success");
  };

  onCreateNewUser = () => {
    const email = this.getEmail.value;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var userId = firebase.auth().currentUser.uid;
        db.doCreateUser(userId, email);
        this.props.dispatch({
          type: "SIGN_IN",
          email,
          userId
        });
      } else {
        // No user is signed in.
        console.log("No User Logged In");
      }
    });
    const { history } = this.props;
    console.log(history);
    history.push("/dashboard");
  };

  render() {
    this.getEmail = "";
    this.getPassword = "";
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    const isInvalid = email === "" || password === "";

    return (
      <form onSubmit={this.handleSubmit}>
        <h3 id="form-title">Sign In/Sign Up</h3>
        <div className="form-group" id="sign-up-form">
          <label className="control-label">Email:</label>
          <input
            className="form-control"
            ref={input => (this.getEmail = input)}
            type="text"
            placeholder="Email Address"
          />
          <label className="control-label">Password:</label>
          <input
            className="form-control"
            ref={input => (this.getPassword = input)}
            type="password"
            placeholder="Password"
          />
          <button
            id="sign-up-button"
            disabled={isInvalid}
            type="submit"
            className="btn btn-success btn-block"
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default connect()(LoginForm);
// export default withRouter(SignUpPage);

// export { LoginForm };
