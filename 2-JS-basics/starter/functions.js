/*We will play with functions
*/

function func1(name){
	return name;
}

var hisName = func1("AppleSauce");
console.log(hisName);

/*
function func2(){ 
	function wrapper() {
		return console.log("INNER WRAPPER");
	}
	return wrapper()
}

console.log(func2());
*/

function func3(name="allans") {
	return name;
}

console.log(func3());

// another way to write a function; using a function expression.

var func5 = function(args) {

	switch(args) {
		case "Mon":
			return "today is " + args;
		case "tues":
			return "Today is " + args;
		default:
			return "It is the weekend";
	}

}

console.log(func5("tues"));

// this is a function declaration
function func6(args, kwargs) {}


//Arrays

var names = ["jeff", "Jam", "Mac"];

// another way to setup an array: ( aka Lists)
var years = new Array(199, 200, 434);

console.log(years[1] + years[0]);

var array_length = names.length;
console.log(array_length);

//the 'push' method for an array(list)--it pushes a value at the end of the array

var list1 = [1,2,3,4,5];

list1.push("end");

list1[10] = "jeffrey";

console.log(list1);

var list2 = [1,2,3,4,5];

list2.unshift("MCI");  //<---unshift moves it to the beginning.
console.log(list2);



var list3 = [10,20,30,40,50,60];

console.log(list3.shift()) //<---this does the opposite of pop.



var isInlist = list3.indexOf(20) ? "This is not in the list"
: "This is in the list";

console.log(isInlist);


// example

function tipCalc(price) {
	var percentage;
		
	if (price < 50) {
		percentage = .2;
	} else if (price > 200) {
		percentage = .1;
	} else {
		percentage = .15;
	}
	return (price * percentage);
}

console.log(tipCalc(10));

var list7 = [124, 48, 268];
var tips = [
	tipCalc(list7[0]).toFixed(2),
	Math.round(tipCalc(list7[1])),
	Math.round(tipCalc(list7[2])),
];

console.log(tips);