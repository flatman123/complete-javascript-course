var Name = "Jeffrey McIntyre";
var age, bDay, city;
var year = 2019;

city = "Brooklyn, NewYork";
bDay = 1982;
age = year - bDay;

/*console.log("His name is " + Name + "and he is " + age + " years old");
alert("This is a popup box!");

userInput = prompt("Enter somterhing");
console.log(userInput);*/

// typeof operator

console.log(typeof 123);


// Operator Precedence

var now = 2019;
var yearJeff = 1982;
var fullAge = 34;

var isFullage = (now - yearJeff) >= fullAge;
console.log(isFullage);

console.log(" fullAGe is a ", typeof fullAge);

/* what would x equal for the below?
 x equals  a number because in javascript, equal assignments
 start from right to left.. so y is calculated first..then
 x equals y */

var x, y;
x = y = (10 + 4) - 2 * 6;
console.log(x);
