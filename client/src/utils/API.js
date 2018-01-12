import axios from "axios";
export default {
  // Saves new control group data to the database
  newData: function(data) {
    return axios.post("/api/new_data", data);
  },
  // Saves new treatment group data to the database
  newExperiment: function(data) {
  	return axios.post("/api/new_experiment", data);
  },
  // Get data
  getExperiments: function(data) {
  	return axios.get("/api/experiments/"+data);
  },
  getExperimentByName: function(data) {
    return axios.get("/api/experiments/"+data.experimentName+"/"+data.userID);
  },
  getData: function(data) {
    return axios.get("api/data/"+data.experimentName+"/"+data.userID);
  },
  loginUser: function(data) {
  	return axios.post("/api/login", data);
  },
  logoutUser: function() {
    return axios.get("/logout");
  },
  registerUser: function(data) {
  	return axios.post("/api/register", data);
  }
};