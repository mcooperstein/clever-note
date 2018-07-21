import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { firebase } from "../firebase";

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push("/");
        }
      });
    }

    render() {
      return <Component />;
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object
  };

  return withRouter(WithAuthorization);
};

export default withAuthorization;
