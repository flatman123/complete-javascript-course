var BMIjohn, BMImark, johnWeight, markWeight;
var johnHeight, markHeight, isMarkHigher;


markWeight = 68.039;
markHeight = 1.90;
BMImark = markWeight / (markHeight * markHeight);

johnWeight = 85.28;
johnHeight = 1.68;
BMIjohn = johnWeight / (johnHeight * johnHeight);

isMarkHigher  = (BMImark < BMIjohn);

console.log("Is Mark\'s BMI greater than John\'s?", isMarkHigher);
console.log("Mark\'s BMI is, " + BMImark);
console.log("John\'s BMI is, " + BMIjohn);


// conditional statements in java

if (johnWeight === markHeight) {
	console.log(" They\'re both equal");
} else{
	console.log("Nope, they\'re not equal");
}

var todayIsHot = false;

if (todayIsHot) {
	console.log("yep , it is hot");
} else {
	console.log("no it\'s not, it is in the middle of winter!!");
}



if (isMarkHigher) {
	alert("Johns is greater");
} else {
	alert("Marks is greater");
}

// if else conditional statements


var getDay;
getDay = prompt("What day do you think it is");

if (getDay === "saturday") {
	alert("Today is Saturday");
} else if (getDay === "sunday"){
	console.log("Today is Sunday man!!");
} else{
	console.log("I dunno what day it is");
}


