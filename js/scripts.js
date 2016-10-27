//business logic
var output = ""
var romanizer = function(userInput) {
  debugger;
  if (userInput < 1 || userInput > 3999) {
    output = "Please enter a valid number"
  } else if (isNaN(userInput)) {
    output = "Please eneter a valid number"
  }
  return output
};

//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var userInput = parseInt($("#input").val());
    var result = romanizer(userInput);
    $("#output").text(result);
  });
});
