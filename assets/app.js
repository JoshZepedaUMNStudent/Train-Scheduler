


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

//Array for trains
var trainNames = ["Grand Western", "Blue Coast", "Smoky Express", "Carolina 500"];

//Adding new train
function renderButtons() {
  $("_NO_INPUT_").empty();
  
  for (var i = 0; i < trainNames.length; i++) {
    var y = $("<button>");
    y.addClass("train");
    y.text(trainNames[i]);
    $("_NO_INPUT_").append(y);
  }
}

$("_NO_INPUT_").on("click", function(event) {
  event.preventDefault();
  var newTrainName = $("_NO_INPUT_").val().trim();
  trainNames.push(newTrainNames);

  renderButtons();
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