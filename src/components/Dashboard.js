import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";

class Dashboard extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1 style={styles.header}>Dashboard Page</h1>
        <p>{this.props.email}</p>
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

export default connect(mapStateToProps)(Dashboard);
