$(document).ready(function () {
  // Display Current Date and Time in jumbotron
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY - h:mm a"));

  // Displays current hour in military format
  var currentHour = moment().format("H");

  // Array that holds the time block elements
  var timeBlocks = [
    $("#seven"),
    $("#eight"),
    $("#nine"),
    $("#ten"),
    $("#eleven"),
    $("#twelve"),
    $("#thirteen"),
    $("#fourteen"),
    $("#fifteen"),
    $("#sixteen"),
    $("#seventeen"),
    $("#eighteen"),
    $("#nineteen"),
  ];

  // Loops through timeBlocks...
  timeBlocks.forEach((block) => {
    // Sets block value to timedBlock...
    var timedBlock = $(block).attr("value");
    // Sets var's to integer...
    timedBlock = +timedBlock;
    currentHour = +currentHour;

    // Compares value to current hour and applies class accordingly
    if (timedBlock < currentHour) {
      $(block).addClass("past");
    } else if (timedBlock === currentHour) {
      $(block).addClass("present");
    } else if (timedBlock > currentHour) {
      $(block).addClass("future");
    }
  });

  // Gets saved task from local storage and displays in time block.
  $("#seven").text(localStorage.getItem("7am"));
  $("#eight").text(localStorage.getItem("8am"));
  $("#nine").text(localStorage.getItem("9am"));
  $("#ten").text(localStorage.getItem("10am"));
  $("#eleven").text(localStorage.getItem("11am"));
  $("#twelve").text(localStorage.getItem("12pm"));
  $("#thirteen").text(localStorage.getItem("1pm"));
  $("#fourteen").text(localStorage.getItem("2pm"));
  $("#fifteen").text(localStorage.getItem("3pm"));
  $("#sixteen").text(localStorage.getItem("4pm"));
  $("#seventeen").text(localStorage.getItem("5pm"));
  $("#eighteen").text(localStorage.getItem("6pm"));
  $("#nineteen").text(localStorage.getItem("7pm"));

  // Setting text of time blocks to save to local storafe on button click...
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    setTasks();
  });

  function setTasks() {
    localStorage.setItem("7am", $("#seven").val().trim());
    localStorage.setItem("8am", $("#eight").val().trim());
    localStorage.setItem("9am", $("#nine").val().trim());
    localStorage.setItem("10am", $("#ten").val().trim());
    localStorage.setItem("11am", $("#eleven").val().trim());
    localStorage.setItem("12pm", $("#twelve").val().trim());
    localStorage.setItem("1pm", $("#thirteen").val().trim());
    localStorage.setItem("2pm", $("#fourteen").val().trim());
    localStorage.setItem("3pm", $("#fifteen").val().trim());
    localStorage.setItem("4pm", $("#sixteen").val().trim());
    localStorage.setItem("5pm", $("#seventeen").val().trim());
    localStorage.setItem("6pm", $("#eighteen").val().trim());
    localStorage.setItem("7pm", $("#nineteen").val().trim());
  }
  // Clears local storage at the end of the day...
  if (currentHour > 22) {
    localStorage.clear();
  }
});
