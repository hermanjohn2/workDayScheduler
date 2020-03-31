$(document).ready(function() {
  // Global variables...
  //   Sets currentHour to what hour of the day it is, in military time
  var currentHour = moment().format("H");

  // Display Current Date and Time in jumbotron
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY - h:mm a"));

  // Sets currentHour to integer
  currentHour = +currentHour;
  console.log(currentHour);
});
