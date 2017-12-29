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
				type: 'bar'
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
					<div className="col-md-12">
						<div id='container' className="field"></div>
						<br/>
						<button type="submit" className="btn btn-default" onClick={this.graphChart}>Chart Results</button>
					</div>
				</div>
			</div>
		);
	}
}






















export default Results;
