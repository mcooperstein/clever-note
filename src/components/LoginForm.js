import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import firebase from "firebase";
import { auth, db, firebase } from "../firebase/index";
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword
} from "../firebase/auth";

const SignUpPage = ({ history }) => (
  <div>
    <LoginForm history={history} />
  </div>
);

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(`${email}, ${password}`);
    this.setState({ error: "" });
    doSignInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        doCreateUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
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

  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === "" || password === "";

    return (
      <form onSubmit={this.handleSubmit}>
        <h3 id="form-title">Sign In/Sign Up</h3>
        <div className="form-group" id="sign-up-form">
          <label className="control-label">Email:</label>
          <input
            className="form-control"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Email Address"
          />
          <label className="control-label">Password:</label>
          <input
            className="form-control"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
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

          {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}

// export default LoginForm;
export default withRouter(SignUpPage);

export { LoginForm };
