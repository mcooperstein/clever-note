import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

const SignUpPage = ({ history }) => (
  <div>
    <LoginForm history={history} />
  </div>
);

export default withRouter(SignUpPage);
