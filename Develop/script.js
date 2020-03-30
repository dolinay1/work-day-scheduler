// function to set the time and date of the current day
function setDateTime() {
    const today = moment();
    let currentDay = $("#currentDay");
    currentDay.text(today.format("dddd, " + "MMMM " + "DD, " + "YYYY, " + "h:mm a"));
}
setDateTime();


// Onclick functions for each save button
// saves user input to local storage and retrieves it

// 9AM save button
$(".btn-9AM").on("click", function() {
    let userInput = $("#text-9AM").val();
    localStorage.setItem("9AM", userInput);
});
$("#text-9AM").val(localStorage.getItem("9AM"));

// 10AM save button
$(".btn-10AM").on("click", function() {
    let userInput = $("#text-10AM").val();
    localStorage.setItem("10AM", userInput);
});
$("#text-10AM").val(localStorage.getItem("10AM"));

// 11AM save button
$(".btn-11AM").on("click", function() {
    let userInput = $("#text-11AM").val();
    localStorage.setItem("11AM", userInput);
});
$("#text-11AM").val(localStorage.getItem("11AM"));

// 12AM save button
$(".btn-12AM").on("click", function() {
    let userInput = $("#text-12AM").val();
    localStorage.setItem("12AM", userInput);
});
$("#text-12AM").val(localStorage.getItem("12AM"));

// 1PM save button
$(".btn-1PM").on("click", function() {
    let userInput = $("#text-1PM").val();
    localStorage.setItem("1PM", userInput);
});
$("#text-1PM").val(localStorage.getItem("1PM"));

// 2PM save button
$(".btn-2PM").on("click", function() {
    let userInput = $("#text-2PM").val();
    localStorage.setItem("2PM", userInput);
});
$("#text-2PM").val(localStorage.getItem("2PM"));

// 3PM save button
$(".btn-3PM").on("click", function() {
    let userInput = $("#text-3PM").val();
    localStorage.setItem("3PM", userInput);
});
$("#text-3PM").val(localStorage.getItem("3PM"));

// 4PM save button
$(".btn-4PM").on("click", function() {
    let userInput = $("#text-4PM").val();
    localStorage.setItem("4PM", userInput);
});
$("#text-4PM").val(localStorage.getItem("4PM"));

// 5PM save button
$(".btn-5PM").on("click", function() {
    let userInput = $("#text-5PM").val();
    localStorage.setItem("5PM", userInput);
});
$("#text-5PM").val(localStorage.getItem("5PM"));





// $(".btn-5PM").on("click", function() {
//     $('textarea').val('').
// });

// set a variable to all divs with the row class
const rows = $("div.row");
// create a variable with the value of the current our using Moment.js
let currentHour = parseInt(moment().format('H'));

// user Array.from to create an array from the rows which we are iterating through with the forEach method
Array.from(rows).forEach(function(row) {
// here the specific ids set one each row is set to the variable rowId
  let
    rowId = row.id,
    rowHour;
  if (rowId) {
    rowHour = parseInt(rowId);
  }
  if (rowHour) {
    // We compare the row id to current hour and set the correct "color" class dependent
    if (currentHour === rowHour) {
        row.classList.add("present");
        row.classList.remove("past", "future");
    } else if ((currentHour < rowHour)){
        row.classList.add("future");
        row.classList.remove("past", "present");
    } else if ((currentHour > rowHour)){
        row.classList.add("past");
        row.classList.remove("present", "future");
    }
  }
});

