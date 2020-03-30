// let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a') // March 26th 2020, 3:33:02 am
// console.log(currentDate);

function setDateTime() {
    const today = moment();
    let currentDay = $("#currentDay");
    
    currentDay.text(today.format("dddd, " + "MMMM " + "DD, " + "YYYY, " + "h:mm a"));
}

setDateTime();

//LOCAL STORAGE
//defining variable referencing HTML
let userInput9AM = $("#user-input-9AM");
let btn9AM = $("#btn-9AM");

let userInput10AM = document.getElementById("input10am");
let btn10am = document.getElementById("btn10am");

let userInput11AM = document.getElementById("input11am");
let btn11am = document.getElementById("btn11am");

let userInput12AM = document.getElementById("input12pm");
let btn12pm = document.getElementById("btn12pm");

let userInput1PM = document.getElementById("input1pm");
let btn1pm = document.getElementById("btn1pm");

let userInput2PM = document.getElementById("input2pm");
let btn2pm = document.getElementById("btn2pm");

let userInput3PM = document.getElementById("input3pm");
let btn3pm = document.getElementById("btn3pm");

let userInput4PM = document.getElementById("input4pm");
let btn4pm = document.getElementById("btn4pm");

let userInput5PM = document.getElementById("input5pm");
let btn5pm = document.getElementById("btn5pm");


//inputting info into local storage
$("#user-input-9AM").val(localStorage.getItem("btn-9AM"));

$("#input10am").val(localStorage.getItem("btn10am"));

$("#input11am").val(localStorage.getItem("btn11am"));

$("#input12pm").val(localStorage.getItem("btn12pm"));

$("#input1pm").val(localStorage.getItem("btn1pm"));

$("#input2pm").val(localStorage.getItem("btn2pm"));

$("#input3pm").val(localStorage.getItem("btn3pm"));

$("#input4pm").val(localStorage.getItem("btn4pm"));

$("#input5pm").val(localStorage.getItem("btn5pm"));


//Buttons will save user inputs to local store. Additionally if there is saved inputs, they will display in the textarea.
$(".b9").on("click", function() {
    var entertext = $(".e9").val();
    localStorage.setItem("9:00", entertext);
});
$(".e9").val(localStorage.getItem("9:00"));

$(".b10").on("click", function() {
    var entertext = $(".e10").val();
    localStorage.setItem("10:00", entertext);
});

//save button to input info into rows
$(".saveBtn").on("click", function (event) {
    //keeps information from clearing after page refresh
    event.preventDefault();
    //when save button is clicked, the value of the textarea is saved
    let plannerText = $(this).parent(".btnBg").siblings("planner-text").val();
    let key = $(this).attr("id");
    console.log(plannerText);
    localStorage.setItem(key, plannerText);
});



