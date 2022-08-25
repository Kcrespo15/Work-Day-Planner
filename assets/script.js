// setting variable

var currentDay = $('#currentDay');

// function to display date and time 
function displayTime() {
   var currentTime = moment().format("MMMM  Do, YYYY hh:mm:ss ")
   $("#currentDay").text(currentTime);
}

setInterval(displayTime);

// function for time block