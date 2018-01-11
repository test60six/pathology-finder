import axios from "axios";
export default {
  // Saves new control group data to the database
  newData: function(data) {
    return axios.post("/api/new_data", data);
  },
  // Saves new treatment group data to the database
  // newTreatment: function(data) {
  //   return axios.post("/api/treatment", data);
  // },
  newExperiment: function(data) {
  	return axios.post("/api/experiments", data);
  },
  // Get data
  getExperiments: function(data) {
  	return axios.get("/api/experiments/"+data);
  },
  // getTreatmentData: function(data) {
  // 	return axios.get("/api/treatment", data);
  // },
  // User Login
  loginUser: function(data) {
  	return axios.get("/api/login", data);
  },
  registerUser: function(data) {
  	return axios.post("/api/register", data);
  }
};