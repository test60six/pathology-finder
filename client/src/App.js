import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Slide from "./pages/Slide.js"
import Denied from "./pages/Denied.js"
import Formies from "./pages/Formies.js"
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Results from "./pages/Results.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return(
    <Router childProps={childProps}>
      <div>
        <Switch>
          <Route exact path="/" component={Slide} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/form" component={Formies} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/access_denied" component={Denied} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;