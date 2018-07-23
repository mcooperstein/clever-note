import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AddNotebooks from "./AddNotebooks";

const AddNotebookHOC = ({ history }) => (
  <div>
    <AddNotebooks history={history} />
  </div>
);

export default withRouter(AddNotebookHOC);
