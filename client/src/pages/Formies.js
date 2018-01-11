import React, { Component } from 'react';
import API from "../utils/API.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Results from "./Results.js";
import '../App.css';


class Formies extends Component {

  state = {
    group: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    experimentName: '',
    userID: 'Eddie'
  };

  newControl = event => {
    if(this.state.experimentName) {
      this.setState({group: 'control'});
    }
    else {alert("Enter an experirment name before you define data type!")}
  };

  newTreatment = event => {
    if(this.state.experimentName) {
      this.setState({group: 'treatment'});
    }
    else {alert("Enter an experirment name before you define a data type!")}
  };

  newExperiment = event => {
    event.preventDefault();
    if(this.state.experimentName) {
    console.log(this.state.experimentName);
    API.newExperiment({
      experimentName: this.state.experimentName, 
      userID: this.state.userID
    })
    .then(res => {
      if(res.status === 200) {
        alert("Experiment successfully created!")
      }
      else {alert("Experiment not created, there was an error!")}
    })
    .catch(err => console.log(err));
  }
  else {
    alert("Enter an experirment name to add a new experiment!")
  }
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    if(this.state.experimentName) {
      if(this.state.group) {
      API.newData({
        experimentName: this.state.experimentName,
        group: this.state.group,
        question1: this.state.question1,
        question2: this.state.question2,
        question3: this.state.question3,
        question4: this.state.question4,
        question5: this.state.question5,
        question6: this.state.question6,
        question7: this.state.question7,
      })
      .then(res => {
      if(res.status === 200) {
        alert("Data successfully written!")
      }
      else {alert("Data not written, there was an error!")}
    })
        .catch(err => console.log(err));
      }
      else {alert("You need to select Control or Treatment before you submit data");}
    }
    else {alert("Enter an experirment name to before you can submit data!")}
  };

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
        <div className="App">
          <div className="row">
            <div className="col-md-3"></div>
              <div className="col-md-6">
                <form className="field">
                <div className="form-group">
                <label htmlFor="experiment">Create New Experiment</label>
                <input className="form-control" id="experiment" name="experimentName" onChange={this.handleInputChange} placeholder="Enter Experiment Name"/>
                <button type="submit" value="submit" className="btn btn-default" onClick={this.newExperiment}>Create Experiment</button>
                </div>
                </form>
                <button type="submit" className="btn btn-default" onClick={this.newControl}>Control Group</button>
                <button type="submit" className="btn btn-default" onClick={this.newTreatment}>Treatment Group</button>
                <form className="field">
                  <div className="form-group">
                    <label htmlFor="thick">Epidermal Thickness</label>
                    <input className="form-control" id="thick" name="question1" onChange={this.handleInputChange} placeholder="Score of 1-10"/>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="inflame">Inflammation</label>
                    <input type="text" className="form-control" id="inflame" name="question2" onChange={this.handleInputChange} placeholder="Score of 1-10"/>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="abcess">Microabcesses</label>
                    <input type="text" className="form-control" id="abcess" name="question3" onChange={this.handleInputChange} placeholder="Number of abcesses noted"/>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="Corneum"> Stratum Corneum Thinning </label>
                    <input type="text" className="form-control" id="Corneum" name="question4" onChange={this.handleInputChange} placeholder="Score of 1-10"/>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="parker">Parkakreratosis</label>
                    <input type="text" className="form-control" id="parker" name="question5" onChange={this.handleInputChange} placeholder="Score of 1-10"/>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="pappy">Papillary Papillae Congestion</label>
                    <input type="text" className="form-control" id="pappy" name="question6" onChange={this.handleInputChange} placeholder="Score of 1-10"/>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="length">Length of Rete Ridges</label>
                    <input type="text" className="form-control" id="length" name="question7" onChange={this.handleInputChange} placeholder="mm"/>
                  </div>
                  <button type="submit" className="btn btn-default" name="submitData" onClick={this.handleFormSubmit}>Submit</button>
                  <button type="submit" className="btn btn-default">Complete Submission</button>
                </form>
              </div>
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


export default Formies;
