import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const SignUpPage = ({ history }) => (
  <div>
    <LoginForm history={history} />
  </div>
);

export default withRouter(SignUpPage);
