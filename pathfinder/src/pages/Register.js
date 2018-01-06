import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Formies from "./Formies.js";
import Login from "./Login.js";
import Results from "./Results.js";
import '../App.css';


function Register(props){
  return(
    <div className="container">
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
      <br/>
      <div className="foot">
      <footer> &copy; 2018 Jason Young,Dennis Gruszka,Ed Hunter,Patrick </footer>
  </div>
    </div>


  )};

  export default Register;
