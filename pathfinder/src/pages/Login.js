import React from 'react';
import '../App.css';
import '../index.css';


function Login(props){
  return(
<div className="container">
   <form className="form-signin">
    <div className= "row">
      <div className="col-md-4"></div>
      <div className="col-md-4">

     <h2 className="form-signin-heading">Please login</h2>
     <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
   <br/>
     <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
     <label className="checkbox"/>
       <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me

     <button className="btn btn-lg btn-block" type="submit">Login</button>
   <br/>
   <button className="btn btn-lg btn-block" type="submit">Register</button>
     </div>
     <div classname="col-md-4"></div>
     </div>
   </form>
 </div>






   )};

export default Login;
