import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Formies from "./pages/Formies.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Results from "./pages/Results.js";
import './App.css';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/form" component={Formies} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>;

export default App;