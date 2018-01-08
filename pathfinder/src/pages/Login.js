import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import API from "../utils/API.js";
import '../App.css';
import '../index.css';

class Login extends Component {

  state = {
    email: '',
    password: '',
    isLoggedIn: false
  };

  changeStatus = event => {
      if(this.state.isLoggedIn === false) {
        this.setState({isLoggedIn: true});
      }
      else if(this.state.isLoggedIn === true) {
        this.setState({isLoggedIn: false});
      }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.isLoggedIn);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.loginUser({email: this.state.email, password: this.state.password})
    .then(res => console.log(res.data));
  }

  render() {
    if(this.state.isLoggedIn === true) {
      return(
        <div>
        <Route path='/' component={() => window.location = 'http://localhost:3000/dashboard'} />
        <Route path='/login' component={() => window.location = 'http://localhost:3000/dashboard'} />
        </div>
        )
    }
    else {
    return(
  <div className="container">
     <form className="form-signin">
      <div className= "row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
  
       <h2 className="form-signin-heading">Please login</h2>
       <input type="text" className="form-control" name="email" onChange={this.handleInputChange} placeholder="Email Address" />
     <br/>
       <input type="current-password" className="form-control" name="password" placeholder="Password" required=""/>
       <label className="checkbox"/>
       <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
  
       <button className="btn btn-lg btn-block" type="submit" onClick={this.handleFormSubmit}>Login</button>
     <br/>
     <Link to="/register"><button className="btn btn-lg btn-block" type="submit">Register</button></Link>
     <br/>
       </div>
       <div classname="col-md-4"></div>
       </div>
     </form>
     <button className="btn btn-lg btn-block" type="submit" onClick={this.changeStatus}>Toggle Login Status</button>
     <br/>
                <br/>
                    <div className="foot">
                        <footer> &copy; 2018 Jason Young,Dennis Gruszka,Ed Hunter,Patrick </footer>
                    </div>
   </div>
   );
  }
  }
}

export default Login;
