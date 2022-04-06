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
x = 10;
y = 5;
x += y;
//* BECAUSE: operator: +=	 Example: x += y	   Same as:   x = x + y

//? Exercise 5:Use the correct assignment operator that will result in x being 50 (same as x = x * y).
x = 10;
y = 5;
x *= y;
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

/*

*/
