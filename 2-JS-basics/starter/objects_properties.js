// This is section will discuss objects ( keys and values) a.k.a Dictionaries.


var person1 = {
	firstName: 'Jamila',
	lastName: 'Pierre',
	favDays: ['mon', 'tues', 'wed'],
	job: 'FashionBlogger',
};

console.log(person1.firstName);
console.log(person1['lastName']);

person1.lastName = 'Mcintyre';
console.log(person1.lastName);





// this is another way of setting up dictionaries
var jeff = new Object();
jeff.name = 'jane';

console.log(jeff.name);

function ageCalc(birthYear) {
	var currentYear = 2019;
	return currentYear - birthYear;
}

var person2 = {
	firstName: 'Jeffrey',
	lastName: 'Mcintyre',
	age: ageCalc,
};

console.log(person2.age(1982));







//here is another way to do it.. AWESOME!

var person3 = {
		age: function(birthYear) {
			return 2019 - birthYear; // basically you can right the whole body of the functon
										// within the dictionary.
		}
}

console.log(person3.age(1984));



// another way to do it is to use the  "this" keyword to access
	// the value of the key.

var person4 = {
	firstName: 'jeff',
	birthYear: 1992,
	age: function() {
		return 2018 - this.birthYear; // the keyword 'this' , means the present/current object.
										// so 'this.birthYear' will be translated to person4.birthYear
	}

}

console.log(person4.age());


var dict1 = {

	key1: 'answer is key',
	getAnswer: function() {
		return this.key1;
	}

}

console.log(dict1.getAnswer());

var john = {
	weight: 100.84,
	height: 1.6256,
	bmi: function() {
		return this.weight /(this.height * this.height);
	}
}

var mike = {
	weight: 94.12,
	height: 1.72,
	bmi: function() {
		return this.weight / (this.height * this.height);
	}
}

if (mike.bmi() > john.bmi()) {
	console.log("Mike is the winner: " + mike.bmi());
}	else {
		console.log("John is the winner: " + john.bmi());
}

