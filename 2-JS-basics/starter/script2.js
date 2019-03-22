var sentence_1 = 'This is the first sentence';
var sentence_2 = 'This is the second sentence';
console.log(sentence_1 + sentence_2)

var firstName = ' jeff';
var numb1 = 3;
var hisAge = 14;
var job = 'network Engineer';

console.log(firstName + ' ' + numb1);

var lastName = 'mcintyre';
console.log(lastName * 4);

// We will declare variables and assign them later
// basically, as long as you declare it, you can change variables like python 
	// without the var keyword.



/*
var  item1, item2, item3;
item1 = 'this is item 1';
item2 = 'this is item 2';
item = false;
item1 = 'Item1 now equals a new value';

console.log(firstName + 'is a ' + hisAge + ' year old person ' + 'who is also a '+ job + item);
console.log(item1);


// This is an aler that will pop up on the screen
var message_1 = 'This is an alert, so click \'ok\' to close';
alert(message_1);


// prompting users for input like the input function in python

var sentence, yourName = prompt('What is your name , please?');
sentence = 'Thanks for entering your name! ';

console.log(sentence + yourName);
*/


/*******************************
operators
*/

var year, jeffBdayear, amount, thisYear, nextYear;
now = 2019
jeffBdayear = 1982;

nextYear = (now + 1) - jeffBdayear;
thisYear = now - jeffBdayear;
console.log(nextYear);
console.log('This Year is age is ' + thisYear);

/*//Ternary operators

var jamAge = 100;

jamAge === 100 ? console.log("Jam\'s age is equal to 100")
: console.log("Nope, she is not equal to 100");


if (jamAge === 54){
	console.log("good guess!!");
}	else {
		alert("Nope..now close the box");
	}

*/

// switch statements

var job = "bodybuilder";
switch (job) {
	case "teacher":
	case "bodybuilder":
		console.log("jeffrey says " + job);
		break
	case "doctor":
		console.log("jeff says hes a "+ "doctor");
		break
	case "programmer":
		console.log("jeff says hes a "+ "coder");
		break
	default:
		console.log("Jeff owns his own business");

}

var verdict,hisAge, firstname;
verdict = true;
firstname = "Joebob";
hisAge = 29;

switch (true) {
	case hisAge === 29:
		console.log(!verdict);
		break
	case hisAge >= 29:
		console.log(verdict);
		break
	default:
		console.log("I dont have an answer");
}




switch(true) {
	case 50 === 20:
		console.log("20 equals 20");
		break
	case 20 > 100:
		console.log("20 is less than 100");
		break
	case (100 * 2) === 2000:
		alert("Correct! , now close");
		break
	default:
		console.log("i dunnoe");

}


switch(false) {
	case 10 <= 3:
		console.log("print, this is " + true);
	break
	case (11 - 3) === 3:
		console.log("This is not true. the code should break");
	break
	default:
		alert("DEFAULT ANSWER");
}

// falsy values and truthy values: undefined, zero, NaN( Not a number), Null
// also empty strings  ''

var number1;


if (number1) {
	console.log("This is is a falsy value.");
} else {
	console.log("This variable is undefined");
}


// Here the value is set to '0'..so it will still be defined

var number2 = 0;

if (number2) {
	console.log("This number is defined even though it is a zero");
}	else {
		console.log("This number is defined");
}

// You can correct it here by using OR

var number3 = 0;

if (number3 || (number3 === 0)) {
	console.log("This is a defined number");
} else {
	console.log("this is not defined");
}

// Practice ternary statements, again.

(number3 > number2) ? console.log("This is true")
: console.log("This is not true DOG!!");

//practice Falsy values with empty strings


var endofFile = '';

if (endofFile || endofFile === '') {
	console.log("This is the end of the file!.");
} else {
	console.log("keep going");
}




//coercion is when javascript uses the  double equal sign to convert values.
//ex:1

var number4 = 49;

if (number4 == '49'){
	console.log("This was successfully converted from a string to a integer");
} else {
	console.log("was not converted to a string");
}


//TRUE
console.log(42 === 42);

//FALSE
console.log(42 === '42');