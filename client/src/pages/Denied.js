import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../App.css';
import '../index.css';


class Denied extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
             		<div className="col-md-3"></div>
             		<div className="col-md-6">
             			<div className="panel panel-default">
             				<div className="panel-body">
             					<h1>Sorry, you must be logged in to access this page</h1>
         					</div>
         				</div>
             		</div>
             		<div className="col-md-3"></div>
            	</div>
			</div>
			)
	}
}

export default Denied;