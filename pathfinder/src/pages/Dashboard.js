import React, { Component } from 'react';
import API from "../utils/API";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../App.css';


function Dashboard(props){
  return(
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">

           <div className="navbar-header">
             <Link className="navbar-brand" to="/Dashboard">Your Dashboard</Link>
           </div>
           <ul className="nav navbar-nav">
             <li><Link to="/form">Create Expirement</Link></li>
             <li><Link to="/results">Your Results</Link></li>
           </ul>
           </div>

       </nav>
      <div className="row">
        <div className="col-md-3">
          <img className="img-responsive" src="/images/histo1.jpg" alt="histology picture" />
          <br/>
          <img className="img-responsive" src="/images/stains.jpg" alt="histology picture" />
        </div>
        <div className="col-md-6">
          <div className="panel panel-default">

            <div className="panel-heading">Welcome to your dashboard!</div>
            <div class="panel-body">
              <p id="expData">Lorem ipsum dolor sit amet, graeco deserunt interesset pro ad, at vis clita adipiscing, usu ne adhuc honestatis. Sit eu illum diceret bonorum, in mei semper iisque labitur. Ut ius simul aliquip adolescens, id sadipscing reformidans usu, qui ea nonumes repudiandae. Sed id agam timeam, cu mei porro feugiat pertinacia, duo probatus imperdiet an. His veri meliore splendide ea. Id etiam abhorreant eam, ad honestatis disputando mei, sint solum graece at duo.

                Ei vide dicunt euripidis vis, vitae copiosae dignissim eum ei, cum veritus evertitur interesset eu. His ut accusata disputando. Ex appetere volutpat repudiandae eum. Sed animal luptatum in. Ex pri everti ponderum, est ea maiestatis dissentiunt, minim dissentiet sea ne. Sed dico constituto cu, vim inermis imperdiet ea. Ea sint consulatu laboramus qui.
              </p>
              </div>


              <table className="table" >
                ...I don't know what to put here!!! hahahahaha
                hahahahahahahahahahahahahahaha
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <img className="img-responsive" src="/images/IHC1.jpg" alt="histology picture" />
            <br/>
            <img className="img-responsive" src="/images/IHC2.jpg" alt="histology picture" />

          </div>
        </div>







      </div>



    )};













    export default Dashboard;
