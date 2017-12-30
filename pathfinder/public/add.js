function add() {
	var ControlOne = {subject: 1, question1: 5, question2: 3, question3: 9, question4: 8, question5: 6, question6: 7, question7: 10}
	$.post("/api/new", ControlOne)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
  });
}