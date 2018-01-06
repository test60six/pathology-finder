import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../utils/API";
import '../App.css';
import '../index.css';


class Login extends Component {

  state = {
    email:'',
    password:''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // const response = API.loginUser({email: this.state.email, password: this.state.password})
    // console.log(response);
    <Link to="/dashboard">Your Results</Link>;
  }

  render() {
    return(
  <div className="container">
     <form className="form-signin">
      <div className= "row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
  
       <h2 className="form-signin-heading">Please login</h2>
       <input type="text" className="form-control" name="username" onChange={this.handleInputChange} placeholder="Email Address" required="" autofocus="" />
     <br/>
       <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
       <label className="checkbox"/>
         <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
  
       <button className="btn btn-lg btn-block" type="submit" onClick={this.handleFormSubmit}>Login</button>
     <br/>
     <button className="btn btn-lg btn-block" type="submit">Register</button>
       </div>
       <div classname="col-md-4"></div>
       </div>
     </form>
     <br/>
                <br/>
                    <div className="foot">
                        <footer> &copy; 2018 Jason Young,Dennis Gruszka,Ed Hunter,Patrick </footer>
                    </div>
   </div>
   );
  }
}

export default Login;
