// playing around with firstClas functions in javascript //Create a function that calls other functions

function interviewQuestions(job) {
	if (job === 'developer') {
		return function(name) {console.log(name + ', How long have you been a ' + job + '?');}
	} else if (job === 'doctor') {
		return function(name) {console.log(name + ', How long have you been a ' + job + '?');}
	} else {
		return function(name) {console.log(name + ', Oh...I see you have no job');}
	}
};

var teacherQuestion = interviewQuestions('doctor');
teacherQuestion('jeff');

///This is basically the samething that PYTHON does:
/*
def function1():
	def _wrapper(arg):
		return f'this is theh inner function-{arg}'
	return _wrapper

variable123 = function1()
variable123('jeffrey')
*/

var backendDeveloper = interviewQuestions('developer');
backendDeveloper('jeff');

//you can even call it right away..no need to put it ina vaariable
interviewQuestions('doctor')('jeff');

// Lecture on  IIFE
// lets say we wanted to create a game where someone wins if their score is between 0 - 10
	// and greater than 5 and loses if less than 5.
// also lets say we wanted to keep the score hidden.



/* function game() {
	var  score = Math.random() * 10
	console.log(score >= 5);
}
game(); */



 /* There a problem with this setup...if our goal is to hide the score, we don't need to put it
	in a function ( which would make it private) and then call the function
	instead we can use whats called a Immediately Invoked function Expressions*/

//EX1: the above code will not look like this..notice the space between the 
	//the word function and the parenthesis..there is no name..Javascript with throw an error.
		//so to stop this you wrap everything in parenthesis..becuase in JavaScript anything
		//in parenthesis can't be a statement, which then treats it as an expression...we're basicall
		// creating a scope that hidden from the outside scope. ITS NOT CODE THAT WE WILL USE.
			//ITS JUST USE FOR DATE-PRIVACY.
	


(function () {
	var score = Math.random() * 10
	console.log(score >= 5);
})(); // So basically we just created data privacy..because we're not able to access the score
		//ever again, this confirmed by trying to console.log the score

//console.log(score);// So basically we just created data privacy..because we're not able to access the score

//EX2: Using arguments.
(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(40);//<- if you were passing arguments to the function , you just pass it here..here i choose '40'.


//My Example-1(PLAYING)
// In my example, the use will need to enter a secret-key to continue with the session

 


function initSession(name) {
	var enterPassword = 'boojsodifj';
	(function (secretKey) {
		console.log(name + ' We have your secret key, don\'t worry about it');
	})(enterPassword + 'nsldnf012nlasdkljf2042jalijsASHDF@($(');
};

initSession('jeff')





/// LECTURE ON CLOSURES
/* EX1 calculate the year the person was born*/

function yearsLeft() {
	var currentYear = 2019;
	return function(age) {
		var yearBorn = currentYear - age;
		return yearBorn;
	}
};

var yourBornYear = yearsLeft();

//console.log(yourBornYear(36));

/* EX2 Get the age of the person to calculate the years left until retirement*/


function countryRetirementYear(retirementAgeLimit) {
	return function(age) {
		var yearsLeft, currentYear;
		currentYear = 2019;
		yearsLeft = retirementAgeLimit - age;
		year = currentYear + yearsLeft;
		return 'You have ' + yearsLeft + ' years left until retirement';
	}
};

var yourRetirementUSA = countryRetirementYear(66);
var yourRetirementTrinidad = countryRetirementYear(67);

console.log(yourRetirementUSA(40));
console.log(yourRetirementTrinidad(26));



//EX3 rewrite the interview questions using closures

function interviewQuest(name) {
	return function(job) {
		return 'so ' + name + ',' + 'how do you like being a, ' + job + '?';
	}
};

var developer = interviewQuest('jeff');
console.log(developer('Backend Developer'));

var voiceEngineer = interviewQuest('Jamila');
console.log(developer('Voice Engineer'));


//Ex4 Do it again

function interviewQuest1(name) {
	return function(job) {
		if (job === 'developer') {
			console.log('What kind of Developer are you?');
		} else if (job === 'doctor') {
			console.log('Oh shit!, werd! , what kinda doctor are you?');
		} else {
			console.log('What do you do then?');
		}

		}
};

interviewQuest1('Jeffrey')('doctor');


//EX4 playing again* combinign stuff)
//HAVE TE USER enter a title to get information about the author.


var authorInfo = {
	name: 'Jeffrey',
	yearBorn: 1912,
	calculateAge: function() {
		return 2019 - this.yearBorn
	}
};

function favoriteBook(bookTitle) {
	return function() {
		if (bookTitle) {
			console.log(authorInfo.name);
			console.log(authorInfo.calculateAge());

			// This is used for internal purposes
			(function () {
			var bookIDnumber = 'ID-Jsdkfjsdf0924';
			console.log(bookIDnumber);
		})();

		} else {
			console.log('please enter a book ');
		}
	}
};



/* tHE 'CALL' METHOD ALLOWS AN ONJECT TO USE THE INFORMATION FROM ANOTHER OBJECT
*/

//EX5

var person = {
	job: 'Photographer',
	age: 35,
	greeting: function(name,day) {
		return 'Hello, people' +
					' My name is ' + name + 
					' and I am a ' + this.job + '.' +
					'Today is ' + day;
	}
};

var jamila = person.greeting('Jamila','Tuesday');
console.log(jamila);

//Now using the 'Call' method touse the stuff in person object

var jeff = {
	job: 'Bussiness owner',
	age: 36
}

console.log(person.greeting.call(jeff,'jeffrey')); //the first arg is the name of the OBJECT followed by additional args if applicable

/* tHE 'BIND' METHOD ALLOWS AN ONJECT TO USE THE INFORMATION FROM ANOTHER OBJECT, just like
the 'call' method, except that the bind method takes a copy of the function and allows you to
store it in a variable with different arguments to use later
*/
///EX 6

var jamilaVar = person.greeting.bind(jamila,'Jammy');
console.log(jamilaVar());



//EX7 using bind in another example ( do some type of calculationg)

var listOfnumbers = [21,425,13,5];

function mathStuff(list, func) {
	var newList = [];
	for (x = 0; x < listOfnumbers.length; x++) {
		newList.push(func(list[x]));
	}
	console.log(newList);
};


var adding = mathStuff(listOfnumbers, addfunction);


//ADD THE ARGUMENT
function addfunction(arg) {
	return arg + 100;
};

//SUBTRACT THE ARGUMENT
function substractStuff(arg) {
	return arg - 10;
};


function plusOnethosand(arg) {
	return arg + 1000;
};

var pierre = {
	dname: 'Pierre',
	job: ' lady',
	age: 'Default age',
	todaysDay: 'SUNDAY'

};

var object2 = {
	dname: 'Default Firstname',
	age: 'Default age',
	todaysDay: 'Monday',
	ob2Function: function(yourName, day) {
		if (yourName) {
			console.log('My name is ' + this.dname +
						' And today is ' + this.todaysDay);
		}
	}
};

object2.ob2Function.call(pierre,'Jamila2','Sunday');


//uSE THE 'apply' method , which accepts arrays(lists)

list2 = [true, false, 'random'];

var dict2 = {
	fn: function(arr) {
		return this.answer1 + this.answer3 + this.answer2;
	}
};


var testing123 = {
	answer1: true,
	answer2: false,
	answer3: 'what\'s this?'
};

var output = dict2.fn.apply(testing123, list2);
//document.getElementById('jeffDemo').innerHTML = output;

/*
		for (y = 0; y < list2.length; y++) {
			if (arr[y] === true) {
				console.log('WE HAVE A TRUE!' + arr[y]);
			} else {
				console.log('who knows wat we have!' + arr[y] );
			}
		}
*/

var testingBind = object2.ob2Function.bind(pierre, pierre.dname = 'Apples');

console.log(testingBind(pierre.todaysDay = 'FRIDAY'));


dict3 = {
	abc: function(arg1,arg2) {
		isOfage = arg1 + arg2;
		if (isOfage < 18) {
			return console.log("Is not of age!!");
		} else {
			return console.log('they\'re ok!');
		}
	}
};

var usaAgelimt = dict3.abc.bind(this, 1);
var japanAgelimit = dict3.abc.bind(this, 6);
var switzAgelimit = dict3.abc.bind(this, 10);

console.log(usaAgelimt(10));
console.log(japanAgelimit(18));
console.log(switzAgelimit(21));