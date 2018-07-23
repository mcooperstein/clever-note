import React, { Component } from "react";
import { Link } from "react-router-dom";

class Notebook extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Link to="/notebooks">{this.props.name}</Link>;
  }
}

export default Notebook;
