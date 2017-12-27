import React from 'react';
import '../App.css';


function Formies(props){
  return(
    <div className="App">




  <div className="row">
    <div className="col-md-3"></div>
  <div className="col-md-6">
    <button type="submit" className="btn btn-default">Control Group</button>
    <button type="submit" className="btn btn-default">Treatment Group</button>
  <form className="field">
  <div className="form-group">
  <label for="thickness">Epidermal Thickness</label>
  <input type="text" className="form-control" id="thick" placeholder="Score of 1-10"/>
  </div>
  <br/>
  <div className="form-group">
  <label for="Inflammation">Inflammation</label>
  <input type="text" className="form-control" id="inflame" placeholder="Score of 1-10"/>
  </div>
  <br/>
  <div className="form-group">
  <label for="appearance">Microabcesses</label>
  <input type="text" className="form-control" id="abcess" placeholder="Number of abcesses noted"/>
  </div>
  <br/>
  <div className="form-group">
  <label for="Stratum Corneum thinning"> Stratum Corneum Thinning</label>
  <input type="text" className="form-control" id="Corneum" placeholder="Score of 1-10"/>
  </div>
  <br/>
  <div className="form-group">
  <label for="Parkakreratosis">Parkakreratosis</label>
  <input type="text" className="form-control" id="parker" placeholder="Score of 1-10"/>
  </div>
  <br/>
  <div className="form-group">
  <label for="pappy">Papillary Papillae Congestion</label>
  <input type="text" className="form-control" id="pappy" placeholder="Score of 1-10"/>
  </div>
  <br/>
  <div className="form-group">
  <label for="Length">Length of Rete Ridges</label>
  <input type="text" className="form-control" id="length" placeholder="mm"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
  <button type="submit" className="btn btn-default">Complete Submission</button>
  </form>
  </div>
  </div>

  </div>
)};

export default Formies;
