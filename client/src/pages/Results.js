//  this is the high charts page
import React, { Component } from 'react';
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

Exporting(Highcharts);

class Results extends Component {

	state = {
		controlData: '',
		treatmentData: '',
		conAvg: '',
		treatAvg: ''
	}

	// computeAvg = () => {
	// 	for(i=0; i<controlData.length; i++) {
	// 		if(state.controlData.id) {
	// 			state.controlData.question1.push(conAvg[0]);
	// 			state.controlData.question2.push(conAvg[1]);
	// 			state.controlData.question3.push(conAvg[2]);
	// 			state.controlData.question4.push(conAvg[3]);
	// 			state.controlData.question5.push(conAvg[4]);
	// 			state.controlData.question6.push(conAvg[5]);
	// 			state.controlData.question7.push(conAvg[6]);
	// 		}
	// 	}

	// 	for(i=0; i<treatmentData.length; i++) {
	// 		if(state.treatmentData.id) {
	// 			state.treatmentData.question1.push(treatAvg[0]);
	// 			state.treatmentData.question2.push(treatAvg[1]);
	// 			state.treatmentData.question3.push(treatAvg[2]);
	// 			state.treatmentData.question4.push(treatAvg[3]);
	// 			state.treatmentData.question5.push(treatAvg[4]);
	// 			state.treatmentData.question6.push(treatAvg[5]);
	// 			state.treatmentData.question7.push(treatAvg[6]);
	// 		}
	// 	}
	// }

	retreiveData = event => {
		API.getControlData()
		.then(res => this.setState({ controlData: res.data }))
		.catch(err => console.log(err));
		console.log("Control data: ");
		console.log(this.state.controlData);

		API.getTreatmentData()
		.then(res => this.setState({ treatmentData: res.data }))
		.catch(err => console.log(err));
		console.log("Treatment data: ");
		console.log(this.state.treatmentData);
	}

	graphChart = event => {
		var controlChart = Highcharts.chart('container', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Results'
			},
			xAxis: {
				categories: ['Epidermal Thickness', 'Inflammation', 'Microabcesses', 'Stratum Corneum Thinning', 'Parkakreratosis', 'Papillary Papillae Congestion', 'Length of Rete Ridges']
			},
			yAxis: {
				title: {
					text: 'Average Value'
				}
			},
			series: [{
				name: 'Control Group',
				data: this.state.controlData
			}, {
				name: 'Treatment Group',
				data: this.state.treatmentData
			}]
		});
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
					<div className="col-md-12">
						<div id='container' className="field">Please Click The Button Below To Chart Your Results</div>
						<br/>
						<button type="submit" className="btn btn-default" onClick={this.retreiveData}>Chart Results</button>
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






















export default Results;
