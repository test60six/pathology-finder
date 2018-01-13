import React, { Component } from 'react';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from "../utils/API.js";
import Dashboard from "./Dashboard.js";
import Formies from "./Formies.js";
import Login from "./Login.js";
import Register from "./Register.js";
import '../App.css';
import '../index.css';

// Initializing Highcharts
Exporting(Highcharts);

class Results extends Component {

	state = {
		experimentName: '',
		data: '',
		userID: 'mrhunter83',
		status: '',
		cQ1: [],
		cQ2: [],
		cQ3: [],
		cQ4: [],
		cQ5: [],
		cQ6: [],
		cQ7: [],
		tQ1: [],
		tQ2: [],
		tQ3: [],
		tQ4: [],
		tQ5: [],
		tQ6: [],
		tQ7: [],
		contTot: [],
		treatTot: []
	}

	// Change state on input
	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.experimentName);
  	}

  	// Submit form data (query databae for specified experiment)
	handleFormSubmit = event => {
		event.preventDefault();
		API.getData({
			experimentName: this.state.experimentName,
			userID: this.state.userID
		})
		.then(res => {
			if(res.data.length !== 0){
			alert('Data sucessfully retrieved!');
			console.log(res.data);
      		return this.setState({data: res.data})
      	}
      	else{
      		alert('No data found...');
      	}
		})
		.catch(err => console.log(err));
	}

	// Grab data for specified experiment, and graph results
	graphChart = event => {
		if(this.state.data) {

		var data = this.state.data;

		// Pushing question value data for each question to a state array
		for(var j=0; j < this.state.data.length; j++) {
			if(this.state.data[j].group === "control") {
				this.state.cQ1.push(data[j].question1);
				this.state.cQ2.push(data[j].question2);
				this.state.cQ3.push(data[j].question3);
				this.state.cQ4.push(data[j].question4);
				this.state.cQ5.push(data[j].question5);
				this.state.cQ6.push(data[j].question6);
				this.state.cQ7.push(data[j].question7);
			}
			else if(this.state.data[j].group === "treatment") {
				this.state.tQ1.push(data[j].question1);
				this.state.tQ2.push(data[j].question2);
				this.state.tQ3.push(data[j].question3);
				this.state.tQ4.push(data[j].question4);
				this.state.tQ5.push(data[j].question5);
				this.state.tQ6.push(data[j].question6);
				this.state.tQ7.push(data[j].question7);
			}
		}

	// Calculating the average for each question state array.
	let Avg = (array) => array.reduce((a, b) => a + b) / array.length;
	this.state.contTot.push(Avg(this.state.cQ1));
	this.state.contTot.push(Avg(this.state.cQ2));
	this.state.contTot.push(Avg(this.state.cQ3));
	this.state.contTot.push(Avg(this.state.cQ4));
	this.state.contTot.push(Avg(this.state.cQ5));
	this.state.contTot.push(Avg(this.state.cQ6));
	this.state.contTot.push(Avg(this.state.cQ7));

	this.state.treatTot.push(Avg(this.state.tQ1));
	this.state.treatTot.push(Avg(this.state.tQ2));
	this.state.treatTot.push(Avg(this.state.tQ3));
	this.state.treatTot.push(Avg(this.state.tQ4));
	this.state.treatTot.push(Avg(this.state.tQ5));
	this.state.treatTot.push(Avg(this.state.tQ6));
	this.state.treatTot.push(Avg(this.state.tQ7));

		// Instantiating our highchart with our user experiment data
		var Chart = Highcharts.chart('container', {
			chart: {
				type: 'column'
			},
			title: {
				text: this.state.experimentName+' Results'
			},
			xAxis: {
				categories: ['Epidermal Thickness', 'Inflammation', 'Microabcesses', 'Stratum Corneum Thinning', 'Parkakreratosis', 'Papillary Papillae Congestion', 'Length of Rete Ridges']
			},
			yAxis: {
				title: {
					text: 'Average Value across all subjects (Control, Treatment)'
				}
			},
			series: [{
				name: 'Control Group',
				data: this.state.contTot
			}, {
				name: 'Treatment Group',
				data: this.state.treatTot
			}]
		});

		// Clear state data
		this.setState({
			cQ1: [],
			cQ2: [],
			cQ3: [],
			cQ4: [],
			cQ5: [],
			cQ6: [],
			cQ7: [],
			tQ1: [],
			tQ2: [],
			tQ3: [],
			tQ4: [],
			tQ5: [],
			tQ6: [],
			tQ7: [],
			contTot: [],
			treatTot: []
		})
	}
	else {alert("There is no data to chart! Retrieve an experiment first!")}
	}

	render() {
		// if (this.state.data) {

		// 	const columns = [{
		// 		Header: 'Subject',
  //   			accessor: 'subject' // String-based value accessors!
		// 	}, {
		// 		Header: 'Experiment Name',
		// 		accessor: 'experimentName',
  //   			Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		// 	}, {
  //   			Header: 'Friend Name',
  //   			accessor: d => d.friend.name // Custom value accessors!
		// 		}, {
  //   			Header: props => <span>Friend Age</span>, // Custom header components!
  //   			accessor: 'friend.age'
		// 	}]
		return (
			<div className="container">
				<nav className="navbar navbar-default">
			    	<div className="container-fluid">
				        <ul className="nav navbar-nav globalNavbar">
				            <li><Link to="/dashboard">Your Dashboard</Link></li>
				            <li><Link to="/form">Create Expirement</Link></li>
				            <li><Link to="/results">Your Results</Link></li>
				        </ul>
			        	<button type="submit" className="btn btn-default pull-right logoutButton"><Link to="/login"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></button>
			    	</div>
				</nav>

				<form className="field">
					<div className="form-group">
					    <input className="form-control" id="set_experiment" name="experimentName" onChange={this.handleInputChange} placeholder="Enter Experiment Name"/>
					</div>
				    <button type="submit" className="btn btn-sm" onClick={this.handleFormSubmit}>Get Experiment Data</button>
				</form>
				<br/>
				<div className="row">
					<div className="col-md-12">
						<div id='container' className="field">Please Click The Button Below To Chart Your Results</div>
						<br/>
						<button type="submit" className="btn btn-default" onClick={this.graphChart}>Chart Results</button>
					</div>
				</div>
				<br/>
				<br/>
				<div className="foot">
					<footer> &copy; 2018 Jason Young, Dennis Gruszka, Ed Hunter, Patrick Jones </footer>
				</div>
			</div>
		);
	}
}






















export default Results;
