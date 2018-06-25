
$(document).ready(function() {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCP4yljquUnihuQH0yOJ-d1nv7cOKLBTmo",
    authDomain: "train-scheduler-d881c.firebaseapp.com",
    databaseURL: "https://train-scheduler-d881c.firebaseio.com",
    projectId: "train-scheduler-d881c",
    storageBucket: "",
    messagingSenderId: "502851230817"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

//Setting global variables
var trainName = $("#train-input").val().trim();
var destination = $("#destination-input").val().trim();
var trainTime = $("#time-input").val().trim();
var frequency = $("#frequency-input").val().trim();
var trainArray = ["Grand Western", "Blue Coast", "Clark Express", "Carolina 500"];

//Adding new train pt. 1
function renderButtons() {
  $("_NO_INPUT_").empty();
  
  for (var i = 0; i < trainNames.length; i++) {
    var y = $("<button>");
    y.addClass("train");
    y.text(trainArray[i]);
    $("_NO_INPUT_").append(y);
  }
}

//Adding new train pt. 2
$("#submit").on("click", function(event) {
  event.preventDefault();
  var newTrainName = $("_NO_INPUT_").val().trim();
  trainArray.push(newTrainNames);

  renderButtons();
});


});
    



  
  
 
// $("#user-input").on("click", function() {
//     var train
//     var line
//     var destination
//     var trainTime
//     var frequency
// }); 

//      var trainName = $("#trainNameInput").val().trim();
// 		var lineName = $("#lineInput").val().trim();
// 		var destination = $("#destinationInput").val().trim();
// 		var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
// 		var frequencyInput = $("#frequencyInput").val().trim();