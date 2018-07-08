
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
      time: firebase.database.ServerValue.TIMESTAMP
    });
  });

  //NOTE: Getting data snapshot from Firebase path only once
  // database.ref().once("value").then(function(snapshot) {
  //   var trains = snapshot.val();
  //   $.each(trains, function(key, train){
  //     $("#schedule").append(
  //       "<tr><td id='nameDisplay'>" + train.name +
  //       "</td><td id='destDisplay'>" + train.destination +
  //       "</td><td id='freqDisplay'>" + train.frequency + "</td></tr>"
  //     )
  //   })

  //NOTE: Listening for changes in database and retrieving them (use "child_changed" id using snapshot/once method)
  database.ref().on("child_added", function (childSnapshot) {  
    $("#schedule").append(
      "<tr><td id='nameDisplay'>" + childSnapshot.val().name +
      "</td><td id='destDisplay'>" + childSnapshot.val().destination +
      "</td><td id='freqDisplay'>" + childSnapshot.val().frequency + "</td></tr>"
    )
  });
  // });
});




// SAVED FOR REFERENCE

// var trainData = []
  // console.log(trainData);

  // //Adding new train pt. 1
  // function displayInfor() {
 
  //   for (var i = 0; i < trainData.length; i++) {
  //     var train = trainData[i];
  //     $('#schedule tr:last').after('<tr><td>' + train.name + '</td><td>' + train.destination + '</td><td>' + train.frequency + '</td><td>' + train.time + '</td><td>' + train.minAway + '</td> </tr>');
  //   }
  // }


  // $('#schedule tr:last').after('<tr><td>'+newTrain.name+'</td><td>'+newTrain.destination+'</td><td>'+newTrain.frequency+'</td><td>'+newTrain.time+'</td><td>'+newTrain.minAway+'</td> </tr>');

