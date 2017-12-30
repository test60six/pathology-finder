import React, { Component } from 'react';
import API from "../utils/API";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Results from "./Results.js";
import '../App.css';


class Formies extends Component {

  state = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    isControl: '',
    isTreatment: ''
  };

  newControl = event => {
    this.setState({isControl: true});
    this.setState({isTreatment: false});
  };

  newTreatment = event => {
    this.setState({isTreatment: true});
    this.setState({isControl: false});
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
    if(this.state.isControl === true && this.state.isTreatment === false) {
    API.newControl({
      question1: this.state.question1,
      question2: this.state.question2,
      question3: this.state.question3,
      question4: this.state.question4,
      question5: this.state.question5,
      question6: this.state.question6,
      question7: this.state.question7,
    })
      .catch(err => console.log(err));
    }
    else if(this.state.isTreatment === true && this.state.isControl === false) {
      API.newTreatment({
      question1: this.state.question1,
      question2: this.state.question2,
      question3: this.state.question3,
      question4: this.state.question4,
      question5: this.state.question5,
      question6: this.state.question6,
      question7: this.state.question7,
    })
      .catch(err => console.log(err));
    }
    else {alert("You need to select Control or Treatment before you submit data");}
  };

  render() {
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
        <div className="App">
          <div className="row">
            <div className="col-md-3"></div>
              <div className="col-md-6">
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
                  <button type="submit" className="btn btn-default" name="question1" onClick={this.handleFormSubmit}>Submit</button>
                  <button type="submit" className="btn btn-default">Complete Submission</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Formies;
