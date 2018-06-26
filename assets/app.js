
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

  var trainData = [
    {
      name: "Grand Western",
      destination: "Phoenix",
      frequency: "15",
      time: "12:00",
      minAway: "8",
    },
    {
      name: "Blue Coast",
      destination: "San Francisco",
      frequency: "20",
      time: "12:00",
      minAway: "19",
    },
    {
      name: "Clark Express",
      destination: "Knoxville",
      frequency: "15",
      time: "12:00",
      minAway: "3",
    },
    {
      name: "Carolina 500",
      destination: "Raleigh",
      frequency: "20",
      time: "12:00",
      minAway: "11",
    },
  ]
  console.log(trainData);

  //Adding new train pt. 1
  function displayInfo() {

    for (var i = 0; i < trainData.length; i++) {
      var train = trainData[i];
      $('#schedule tr:last').after('<tr><td>' + train.name + '</td><td>' + train.destination + '</td><td>' + train.frequency + '</td><td>' + train.time + '</td><td>' + train.minAway + '</td> </tr>');
    }
  }

  //Adding new train pt. 2
  $("#submit").on("click", function (event) {
    event.preventDefault();
    var name = $("#train-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var time = $("#time-input").val().trim();
    // $('#schedule tr:last').after('<tr><td>'+newTrain.name+'</td><td>'+newTrain.destination+'</td><td>'+newTrain.frequency+'</td><td>'+newTrain.time+'</td><td>'+newTrain.minAway+'</td> </tr>');
    database.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
      time: firebase.database.ServerValue.TIMESTAMP
    });
  });

  database.ref().on("child_added", function (childSnapshot) {
    $("#schedule").append(
      "<tr><td id='nameDisplay'>" + childSnapshot.val().name +
      "</td><td id='destDisplay'>" + childSnapshot.val().destination +
      "</td><td id='freqDisplay'>" + childSnapshot.val().frequency + "</td></tr>"


    )
  })

});


