// let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a') // March 26th 2020, 3:33:02 am
// console.log(currentDate);

function setDateTime() {
    var dateTimeP = $("#currentDay");
    const today = moment();
    dateTimeP.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}

setDateTime();

//LOCAL STORAGE
//defining variable referencing HTML
var input9am = document.getElementById("input9am");
var btn9am = document.getElementById("btn9am");
var input10am = document.getElementById("input10am");
var btn10am = document.getElementById("btn10am");
var input11am = document.getElementById("input11am");
var btn11am = document.getElementById("btn11am");
var input12pm = document.getElementById("input12pm");
var btn12pm = document.getElementById("btn12pm");
var input1pm = document.getElementById("input1pm");
var btn1pm = document.getElementById("btn1pm");
var input2pm = document.getElementById("input2pm");
var btn2pm = document.getElementById("btn2pm");
var input3pm = document.getElementById("input3pm");
var btn3pm = document.getElementById("btn3pm");
var input4pm = document.getElementById("input4pm");
var btn4pm = document.getElementById("btn4pm");
var input5pm = document.getElementById("input5pm");
var btn5pm = document.getElementById("btn5pm");
//save button to input info into rows
$(".saveBtn").on("click", function (event) {
    //keeps information from clearing after page refresh
    event.preventDefault();
    //when save button is clicked, the value of the textarea is saved
    var textArea = $(this).parent(".btnBg").siblings("textarea").val();
    var key = $(this).attr("id");
    console.log(textArea);
    localStorage.setItem(key, textArea);
});
//inputting info into local storage
$("#input9am").val(localStorage.getItem("btn9am"));
$("#input10am").val(localStorage.getItem("btn10am"));
$("#input11am").val(localStorage.getItem("btn11am"));
$("#input12pm").val(localStorage.getItem("btn12pm"));
$("#input1pm").val(localStorage.getItem("btn1pm"));
$("#input2pm").val(localStorage.getItem("btn2pm"));
$("#input3pm").val(localStorage.getItem("btn3pm"));
$("#input4pm").val(localStorage.getItem("btn4pm"));
$("#input5pm").val(localStorage.getItem("btn5pm"));