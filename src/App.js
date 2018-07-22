import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import withAuthentication from "./withAuthentication";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddNotebooks from "./components/AddNotebooks";
import YourNotebooks from "./components/YourNotebooks";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/your-notebooks" component={YourNotebooks} />
          <Route path="/add-notebook" component={AddNotebooks} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// export default withAuthentication(App);
export default App;
