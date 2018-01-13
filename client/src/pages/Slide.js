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
   <div className="slide"><h1 className="slide-number"><img className="img" src="/images/7.PNG" alt="micro tubes" height="500" width="800"/></h1></div>
   <div className="slide"><h1 className="slide-number"><img className="img" src="/images/slide1.jpg" alt="chromosome" height="500" width="800"/></h1></div>
   <div className="slide"><h1 className="slide-number"><img className="img" src="/images/scientist.jpg" alt="scientist" height="500" width="800"/></h1></div>
   <div className="slide"><h1 className="slide-number"><img className="img" src="/images/microscope1.jpg" alt="scientist at microscope" height="500" width="800"/></h1></div>
   {/* <div className="slide"><h1 className="slide-number"><img className="img" src="/images/14.jpg" alt="scientist holding slide" height="500" width="800"/></h1></div> */}
 </div>
</div>
<Link to="/login">
<button  className="btn btn-default" style={{margin: '0 auto'}} Link to="/login">ENTER SITE</button>
</Link>
<br/>
<br/>
                    <div className="foot">
                        <footer> &copy; 2018 Jason Young, Dennis Gruszka, Ed Hunter, Patrick Jones</footer>
                    </div>
   </div>
   );
  }
  }
}
export default Login;