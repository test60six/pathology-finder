import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Formies from "./Formies.js";
import Login from "./Login.js";
import Results from "./Results.js";
import '../App.css';


function Register(props){
  return(
    <div className="container">
    <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <Link class="navbar-brand" to="/register">Register Page</Link>
                  </div>
                  <ul class="nav navbar-nav">
                    <li><Link to="/login">Login Page</Link></li>
                    <li><Link to="/form">Form Page</Link></li>
                    <li><Link to="/results">Results Page</Link></li>
                  </ul>
                </div>
              </nav>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
    <form className="field">
  <div className="form-group">
    <label for="Name">Full Name</label>
    <input type="Name" className="form-control" id="Name" placeholder="Name Dr. Etc"/>
  </div>
  <div className="form-group">
    <label for="passsword">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
<div className="form-group"/>
    <label for="institution">Institution</label>
    <input type="text" className="form-control" id="Institution" placeholder="Institution"/>
    <br/>
    <button type="submit" className="btn btn-default">Submit</button>

</form>
</div>
<div className="col-md-3"></div>

</div>
</div>


)};

export default Register;
