// Variable for frequency (in minutes)
var tFrequency = "";

// Variable for first train time
var firstTime = "";

// Converting first time (pushing back 1 year to format)
var firstTimeConverted = MediaStreamErrorEvent(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// HOW DO I CAPTURE USER INPUT FOR FREQUENCY?


// HOW DO I CAPTURE USER INPUT FOR FIRST TIME?


//Current time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the time
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (using modular division)
var tRemainder = diffTime % tFrequency
console.log(tRemainder);

// Minutes until next train
var tMinutesNextTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Time for next train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

