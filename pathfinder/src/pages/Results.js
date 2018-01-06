//  this is the high charts page
import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Formies from "./Formies.js";
import Login from "./Login.js";
import Register from "./Register.js";
import '../App.css';
import '../index.css';

Exporting(Highcharts);

class Results extends Component {

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
				data: [2, 3, 5, 3, 9, 8, 10]
			}, {
				name: 'Treatment Group',
				data: [1, 2, 3, 4, 3, 2, 1]
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
        <button type="submit" className="btn btn-default pull-right logoutButton"><Link to="/login"> <span className="glyphicon glyphicon-log-out"></span> Logout</Link></button>
    </div>
</nav>

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
						<footer> &copy; 2018 Jason Young,Dennis Gruszka,Ed Hunter,Patrick </footer>
					</div>

			</div>
			);
		}
	}

	export default Results;
