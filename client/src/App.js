import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API.js";
import Dashboard from "./pages/Dashboard.js";
import Slide from "./pages/Slide.js"
import Denied from "./pages/Denied.js"
import Formies from "./pages/Formies.js"
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Results from "./pages/Results.js";
import './App.css';

class App extends Component {

  state = {
      isLoggedIn: false
    }

  componentWillMount() {
    console.log(this.state.isLoggedIn);
    API.getUser()
    .then(res => {
      console.log(res.data);
      if(res.data) {
        this.setState({isLoggedIn: true});
      }
      else {
        this.setState({isLoggedIn: false});
      }
    })
  }

  render() {
      return(
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Slide} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" render={() => 
              (this.state.isLoggedIn ? ( <Route  component={Dashboard} />)
              : (<Route component={Denied} />)
              )} />
              <Route path="/results" render={() => 
              (this.state.isLoggedIn ? ( <Route  component={Results} />)
              : (<Route component={Denied} />)
              )} />
              <Route path="/form" render={() => 
              (this.state.isLoggedIn ? ( <Route  component={Formies} />)
              : (<Route component={Denied} />)
              )} />
            </Switch>
          </div>
        </Router>
      )
  }
}

export default App;