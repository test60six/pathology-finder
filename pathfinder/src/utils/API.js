import axios from "axios";
export default {
  // Saves new control group data to the database
  newControl: function(data) {
    return axios.post("/api/control", data);
  },
  // Saves new treatment group data to the database
  newTreatment: function(data) {
    return axios.post("/api/treatment", data);
  }
};