$(document).ready(function() {
  // Global variables...
  // Displays current hour in military format
  var currentHour = moment().format("H");

  var num7El = $("#seven");
  var num8El = $("#eight");
  var num9El = $("#nine");
  var num10El = $("#ten");
  var num11El = $("#eleven");
  var num12El = $("#twelve");
  var num13El = $("#thirteen");
  var num14El = $("#fourteen");
  var num15El = $("#fifteen");
  var num16El = $("#sixteen");
  var num17El = $("#seventeen");
  var num18El = $("#eighteen");
  var num19El = $("#nineteen");

  // Display Current Date and Time in jumbotron
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY - h:mm a"));

  // Array that holds the time block elements
  var timeBlocks = [
    num7El,
    num8El,
    num9El,
    num10El,
    num11El,
    num12El,
    num13El,
    num14El,
    num15El,
    num16El,
    num17El,
    num18El,
    num19El
  ];

  // Loops through timeBlocks...
  timeBlocks.forEach(block => {
    // Sets block value to timedBlock...
    var timedBlock = $(block).attr("value");
    // Sets var's to integer...
    timedBlock = +timedBlock;
    currentHour = +currentHour;

    // Compares value to current hour and applies class accordingly
    if (timedBlock < currentHour) {
      console.log(timedBlock + "is in past");
      $(block).addClass("past");
    } else if (timedBlock === currentHour) {
      console.log(timedBlock + "same");
      $(block).addClass("present");
    } else if (timedBlock > currentHour) {
      console.log(timedBlock + "is later");
      $(block).addClass("future");
    }
  });
});
