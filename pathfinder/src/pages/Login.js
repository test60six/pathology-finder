import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import API from "../utils/API.js";
import '../App.css';
import '../index.css';

class Login extends Component {

  state = {
    email: '',
    password: '',
    isLoggedIn: false

  };

  changeStatus = event => {
      if(this.state.isLoggedIn === false) {
        this.setState({isLoggedIn: true});
      }
      else if(this.state.isLoggedIn === true) {
        this.setState({isLoggedIn: false});
      }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.isLoggedIn);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.loginUser({email: this.state.email, password: this.state.password})
    .then(res => console.log(res.data));
  }

  render() {
    if(this.state.isLoggedIn === true) {
      return(
        <div>
        <Route path='/' component={() => window.location = 'http://localhost:3000/dashboard'} />
        <Route path='/login' component={() => window.location = 'http://localhost:3000/dashboard'} />
        </div>
        )
    }
    else {
    return(
  <div className="container">
    <div id="slideshow">
 <div class="slide-wrapper">
   <div className="slide"><h1 class="slide-number"><img className="img-responsive" src="/images/7.PNG" alt="histology picture" /></h1></div>
   <div className="slide"><h1 class="slide-number"><img className="img-responsive" src="/images/14.jpg" alt="histology picture" /></h1></div>
   <div className="slide"><h1 class="slide-number"><img className="img-responsive" src="/images/19.PNG" alt="histology picture" /></h1></div>
   <div className="slide"><h1 class="slide-number"><img className="img-responsive" src="/images/microscope1.jpg" alt="histology picture" /></h1></div>
   <div className="slide"><h1 class="slide-number"><img className="img-responsive" src="/images/slide1" alt="histology picture" /></h1></div>
 </div>
</div>

                <br/>
                    <div className="foot">
                        <footer> &copy; 2018 Jason Young,Dennis Gruszka,Ed Hunter,Patrick </footer>
                    </div>
   </div>
   );
  }
  }
}

export default Login;
