import React, { Component } from 'react';
import API from "../utils/API.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../App.css';
import Formies from "./Formies.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Results from "./Results.js";

class Dashboard extends Component {

  state = {
    experiments: '',
    userID: 'Eddie'
  }

  componentDidMount() {
    console.log("This function runs "+this.state.userID)
    API.getExperiments(this.state.userID)
    .then(res => {
      console.log(res.data)
      this.setState({experiments: res.data})
    })
    .catch(err => console.log(err));
    console.log(this.state.userID);
  }

  render() {
    return(
      <div className="container">
        <nav className="navbar navbar-default">
    <div className="container-fluid">
        <ul className="nav navbar-nav globalNavbar">
            <li><Link to="/dashboard">Your Dashboard</Link></li>
            <li><Link to="/form">Create Expirement</Link></li>
            <li><Link to="/results">Your Results</Link></li>
        </ul>
        <button type="submit" className="btn btn-default pull-right logoutButton"><Link to="/login"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></button>
    </div>
</nav> 
        <div className="row">
          <div className="col-md-3">
            <img className="img-responsive" src="/images/histo1.jpg" alt="histology picture" />
            <br/>
            <img className="img-responsive" src="/images/stains.jpg" alt="histology picture" />
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">Welcome to your dashboard!</div>
              <div className="panel-body">
                <h3 id="expData" style={{color: 'white'}}>
                Below you will find a full list of all the experiments you have submitted.  
                Click on an experiment to graph the results!
                </h3>
                <br/>
                {
                  this.state.experiments
                    ? this.state.experiments.map((experiments) => 
                      <Link to="/results"><div className="expPanel" onClick={this.graphResults}>
                        <h3 key={experiments.experimentName.toString()}>
                        Experiment Name:<br/>
                        {experiments.experimentName}
                        </h3>
                      </div></Link>
                      )
                    : <div>
                        <h3 style={{color: 'white'}}>OOPS! Looks like you don't have any experiments! 
                        Click on "Create Experiment" in the navbar to submit data for a new experiment!
                        </h3>
                      </div>
                }
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <img className="img-responsive" src="/images/IHC1.jpg" alt="histology picture" />
            <br/>
            <img className="img-responsive" src="/images/IHC2.jpg" alt="histology picture" />
          </div>
        </div>
        <br/>
                <br/>
                    <div className="foot">
                        <footer> &copy; 2018 Jason Young,Dennis Gruszka,Ed Hunter,Patrick </footer>
                    </div>
      </div>
    );
  }
}

export default Dashboard;