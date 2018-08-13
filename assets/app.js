
$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCP4yljquUnihuQH0yOJ-d1nv7cOKLBTmo",
    authDomain: "train-scheduler-d881c.firebaseapp.com",
    databaseURL: "https://train-scheduler-d881c.firebaseio.com",
    projectId: "train-scheduler-d881c",
    storageBucket: "train-scheduler-d881c.appspot.com",
    messagingSenderId: "502851230817"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var name = "";
  var destination = "";
  var frequency = 0;
  var time = 0;

  //Adding New Train
  $("#submit").on("click", function (event) {
    event.preventDefault();
    name = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    time = $("#time-input").val().trim();
    database.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
      time: time
    });
  });

  

  //NOTE: Listening for changes in database and retrieving them 
  database.ref().on("child_added", function (childSnapshot) {  
    var currentTime = new Date();
    var firstTrainTime = new Date("2018-08-12 " + childSnapshot.val().time);
    firstTrainTime.setFullYear(currentTime.getFullYear());
    firstTrainTime.setMonth(currentTime.getMonth());
    firstTrainTime.setDate(currentTime.getDate());
    var timeSince = currentTime - firstTrainTime;
    var frequency = Number(childSnapshot.val().frequency) * 60 * 1000;
    var multiplier = Math.ceil(timeSince / frequency);
    var nextTrain = moment(firstTrainTime.getTime() + (frequency * multiplier));
    var minutesUntil = nextTrain.diff(moment(), "minutes");

    $("#schedule").append(
      "<tr><td id='nameDisplay'>" + childSnapshot.val().name +
      "</td><td id='destDisplay'>" + childSnapshot.val().destination +
      "</td><td id='freqDisplay'>" + childSnapshot.val().frequency + 
      "</td><td id='nextArrivalDisplay'>" + moment(nextTrain).format("h:mma") + 
      "</td><td id='freqDisplay'>" + minutesUntil + 
      "</td></tr>"
    )
  });
});

// END OF CODE






// NOTE:  FOR REFERENCE ONLY!!
// Getting data snapshot from Firebase path only once (use "child_changed" id using snapshot/once method)
  // database.ref().once("value").then(function(snapshot) {
  //   var trains = snapshot.val();
  //   $.each(trains, function(key, train){
  //     $("#schedule").append(
  //       "<tr><td id='nameDisplay'>" + train.name +
  //       "</td><td id='destDisplay'>" + train.destination +
  //       "</td><td id='freqDisplay'>" + train.frequency + "</td></tr>"
  //     )
  //   })