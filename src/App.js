import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import withAuthentication from "./withAuthentication";
import Home from "./components/Home";
import Notebooks from "./components/Notebooks";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Notebooks} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// export default withAuthentication(App);
export default App;
