import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../utils/API.js";
import '../App.css';


class Register extends Component {

  state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    institution: '',
    isLoggedIn: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.registerUser({
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      institution: this.state.institution
    })
    .then(res => {
      console.log(res.status);
      if(res.status === 200) {
        this.setState({isLoggedIn: true});
      }
      console.log(res.data)})
    .catch(err => console.log(err));
  }

  render() {
    if(this.state.isLoggedIn === true) {
      return(
        <div>
          <Route path='/register' component={() => window.location = 'http://localhost:3000/dashboard'} />
        </div>
      )
    }
    else {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form className="field">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="Name" className="form-control" name="firstname" onChange={this.handleInputChange} placeholder="First Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="Name" className="form-control" name="lastname" onChange={this.handleInputChange} placeholder="Last Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username" className="form-control" name="username" onChange={this.handleInputChange} placeholder="Username"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" onChange={this.handleInputChange} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label htmlFor="passsword">Password</label>
                <input type="new-password" className="form-control" name="password" onChange={this.handleInputChange} placeholder="Password"/>
              </div>
              <div className="form-group"/>
                <label htmlFor="institution">Institution</label>
                <input type="text" className="form-control" name="institution" onChange={this.handleInputChange} placeholder="Institution"/>
                <br/>
                <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}
}

export default Register;
