
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
function displayInfo() {
  $(tRow).empty();
  
  for (var i = 0; i < trainArray.length; i++) {
    var tBody = $("tbody");
    var tRow = $("<tr>");
    $(tRow).append(trainArray.length);
  }
}

//Adding new train pt. 2
$("#submit").on("click", function(event) {
  event.preventDefault();
  var newTrainName = $("#train-input").val().trim();
  var newDestination = $("#destination-input").val().trim();
  var newTime = $("#time-input").val().trim();
  var newFrequency = $("#frequency-input").val().trim();
  trainArray.push(newTrainName);
  trainArray.push(newDestination);
  trainArray.push(newTime);
  trainArray.push(newFrequency);

  displayInfo();
});

displayInfo();

});
    

