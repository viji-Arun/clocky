//Fetches elements with the class 'dials'
var dialLines = document.getElementsByClassName('dials');
//Fetches the first element with the class 'clock'
var clockE1 = document.getElementsByClassName('clock')[0];

for(var i = 1; i < 60; i++){
  //Appends div elements with class 'dials' inside the clock element
  clockE1.innerHTML += "<div class='dials'></div>"
  //see rotation for each line
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock(){
  var weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wenesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var d = new Date(); // Creates a date object to obtain current date and time
  var h = d.getHours(); // Gets current hour
  var m = d.getMinutes(); // Get current minute
  var s = d.getSeconds(); // Get current seconds
  var date = d.getDate(); // Get current date
  var month = d.getMonth(); // Gets current month
  var year = d.getFullYear(); // Gets current year

  var hDeg = h * 30 + m * (360 / 720); // calculates degrees for hour hand
  var mDeg = m * 6 + s * (360 / 3600); // calculates degree for minute hand
  var sDeg = s * 6; // calculates degreee for second hand

  var hE1 = document.querySelector('.hour'); // Selects the element for the hour hand
  var mE1 = document.querySelector('.minute'); //Selects the lement for the minute hand
  var sE1 = document.querySelector('.second'); //Select the element for the second hand
  var dateE1 = document.querySelector('.date'); //Select the element for the date
  var dayE1 = document.querySelector('.day'); // Select the element for the day

  var day = weekDay[d.getDay()]; //Gets the current day

  if(month < 9){
    month = "0" + month; //Prefixes '0' for months less than 10 to match format
  }

  hE1.style.transform = "rotate(" +hDeg + "deg)"; //Rotates hour hand based on the calculated degree
  mE1.style.transform = "rotate(" + mDeg + "deg)"; // Rotates minute hand based on the calculated degree
  sE1.style.transform = "rotate(" + sDeg + "deg)"; // Rotates second hand based on the calculated degree
  dateE1.innerHTML = date + "/" + month + "/" + year; // Updates the data display
  dayE1.innerHTML = day; // Updates the day display


}

setInterval(clock, 100); // Calls the 'clock' function every 100 milliseconds
