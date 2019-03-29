// Lecture on "This" Keyword
// by default the "This" keyword  calls the Global Context.
//"This" is only assigned a value when a function is called.

//console.log(this)
/*
console.log(func1(2033));

function func1(year){
	console.log(2230 - year);
	console.log(this);

}
*/


var jams = {
	name: "Jamila",
	job: "Boney",
	jeFunction: function(){
		console.log(this.job);

		function innerfunction(){
			console.log(this);
		}
		innerfunction();
	}
}


//Javascript has something call Method borrowing:
//example

var mike = {
	name: "mikesLemond",
	job: "Idunno",
}

mike.jeFunction = jams.jeFunction; // so now mike has the same functionality as john.

console.log(mike.jeFunction());