//? JS VARIABLES

//?Exercise 1: Create a variable called carName, assign the value Volvo to it.
var carName = "Volvo";

console.log("variable carName : " + carName);
//* Or without typing the describtion in the variable ,with quotationmarks and a "+"-sign:
console.log(carName);
/*
//?Exercise 2: Create a variable called x, assign the value 50 to it.
var x = 50;
console.log("variable x:" + x);

//?Exercise 3: Display the sum of 5 + 10, using two variables: x and y.
var y = 5;
var z = 10;
result = y + z;

console.log(result);
*/
/*
//? Exercise 4: Create a variable called z, assign x + y to it, and display the result in an alert box.
var x = 5;
var y = 10;
var z = x + y;
alert(z);
*/
/*
//? Exercise 5: On one single line, declare three variables with the following names and values:
//?Here is something wrong - althoigh this is the given result in W3"
firstName = "John";
lastName = "Doe";
age = 35;

var firstName = "John", lastName = "Doe", age 35;
*/

/*
//? JS OPERATORS
//? Exercise 1:Multiply 10 with 5, and alert the result:
alert(10 * 5);
*/

/*
//? Exercise 2:Divide 10 by 2, and alert the result:
alert(10 / 2);
*/

/*
//? Exercise 3:Alert the remainder when 15 is divided by 9.
alert(15 % 9);
/*Pop-Up/Alert_Ergebnis ist gleich 6: Begründdung siehe Definition:
Definition:
The remainder / modulus operator ( % ) returns the remainder after (integer) division. 
This operator returns the remainder left over when one operand is divided by a second operand. 
When the first operand is a negative value, the return value will always be negative, 
and vice versa for positive values.
*/

//? Exercise 4: Use the correct assignment operator that will result in x being 15 (same as x = x + y).
/*
x = 10;
y = 5;
x += y;
*/
//* BECAUSE: operator: +=	 Example: x += y	   Same as:   x = x + y

//? Exercise 5:Use the correct assignment operator that will result in x being 50 (same as x = x * y).
/*
x = 10;
y = 5;
x *= y;
*/
//* BECAUSE: operator: *=	 Example: x *= y	   Same as:   x = x * y

//? DATA TYPES
//? Exercise 1: Use comments to describe the correct data type of the following variables:
let length = 16; //  Number;

let lastName = "Johnson"; //  String;

const x = {
  firstName: "John",
  lastName: "Doe",
}; //  Object;

/* 
    const x = {
    firstName: "John",
    lastName: "Doe",     is an OBJECT BECAUSE: 
Objects are variables too. 
But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car:

const car = {type:"Fiat", model:"500", color:"white"};
*/

//? JS FUNCTIONS
//? Exercise 1:Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}
myFunction();

//?Exercise 2:Create a function called "myFunction".

function myFunction() {
  alert("Hello World!");
}

//?Exercise 3:Make the function return "Hello".
function myFunction() {
  return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

//?Exercise 4:Make the function display "Hello" in the inner HTML of an element with the ID "demo".
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello";
}

//?OBJECTS
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:

//?EVENTS
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:

//?STRINGS
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:

//?STRING METHODS
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:
//?Exercise 4:
//?Exercise 5:

//?ARRAYS
//?Exercise 1:Get the value "Volvo" from the cars array.
const cars = ["Saab", "Volvo", "BMW"];
let m = cars[1];

//?Exercise 2:
//?Change the first item of cars to "Ford".
const myCars = ["Volvo", "Jeep", "Mercedes"];
myCars[0] = "Ford";

//?Exercise 3:Alert the number of items in an array, using the correct Array property.

const myCars = ["Volvo", "Jeep", "Mercedes"];
alert(myCars.length);

//?ARRAY METHODS
//?Exercise 1:Use the correct Array method to remove the last item of the fruits array.
const allMyFruits = ["Banana", "Orange", "Apple"];
allMyFruits.pop();

//?Exercise 2:Use the correct Array method to add "Kiwi" to the fruits array.
const allMyFruits2 = ["Banana", "Orange", "Apple"];
allMyFruits2.push("Kiwi");

//?Exercise 3:Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits2.splice(1, 2);

//?ARRAY SORT
//?Exercise 1:Use the correct Array method to sort the fruits array alphabetically.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();

//?JS DATES
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:
//?Exercise 4:

//?JS MATH
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:
//?Exercise 4:

//?JS COMPARISONS
//?Exercise 1://?Exercise 1:Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
alert(x > y);
//?Exercise 2://?Exercise 2:Choose the correct comparison operator to alert true, when x is equal to y.
x = 10;
y = 10;
alert(x == y);

//?Exercise 3:Choose the correct comparison operator to alert true, when x is NOT equal to y.
x = 10;
y = 5;
alert(x != y);

//? Exercise 4:Choose the correct conditional (ternary) operator to alert "Too young"
//?  if age is less than 18, otherwise alert "Old enough".

//?JS CONDITIONS
//?Exercise 1:Fix the if statement to alert "Hello World" if x is greater than y
if (x > y) {
  alert("Hello World");
}

//?Exercise 2:

//?JS SWITCH
//?Exercise 1:
//?Exercise 2:

//?JS FOR LOOPS
//?Exercise 1:Create a loop that runs from 0 to 9.
let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

//?Exercise 2:Create a loop that runs through each item in the fruits array.

//?WHILE LOOPS
//?Exercise 1:Create a loop that runs as long as l is less than 10.
let l = 0;
while (l < 10) {
  console.log(l);
  i++;
}
//?Exercise 2:Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
let = 0;
while (i < 10) {
  console.log(i);
}
let g = 0;
while (g < 10) {
  console.log(g);
  g = g + 2;
}

//?BREAK LOOPS
//?Exercise 1:Make the loop stop when i is 5.
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

//?Exercise 2:Make the loop jump to the next iteration when i is 5.
for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//?HTML DOM
//?Exercise 1:
//?Exercise 2:
//?Exercise 3:
//?Exercise 4:
//?Exercise 5:
//?Exercise 6:
//?Exercise 7:
//?Exercise 8:
//?Exercise 9:
