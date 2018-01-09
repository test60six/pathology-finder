import axios from "axios";
export default {
  // Saves new control group data to the database
  newControl: function(data) {
    return axios.post("/api/control", data);
  },
  // Saves new treatment group data to the database
  newTreatment: function(data) {
    return axios.post("/api/treatment", data);
  },
  // Get data
  getControlData: function(data) {
  	return axios.get("/api/control", data);
  },
  getTreatmentData: function(data) {
  	return axios.get("/api/treatment", data);
  },
  // User Login
  loginUser: function(data) {
  	return axios.get("/api/login", data);
  },
  registerUser: function(data) {
  	return axios.post("/api/register", data);
  }
};