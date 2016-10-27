//business logic
var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var output = ""
var romanizer = function(userInput) {
  debugger;
  if (userInput < 1 || userInput > 3999) {
    output = "Please enter a valid number"
  } else if (isNaN(userInput)) {
    output = "Please enter a valid number"
  } else if ( userInput > 0 && userInput <10) {
    var num1 = onesFunction(userInput);
  }
  return output
}; //end of the romanizer function

var onesFunction = function(num1) {
  debugger;
  for (var index = 0; index < num1; index++) {
    output = ones[num1]

  }
  return output
};//end of the romanizer function

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
