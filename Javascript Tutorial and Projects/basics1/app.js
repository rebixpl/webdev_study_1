// document.write("document write hello");
// alert("hello people");
// console.log("hello world console log");

// variables
// let name = "xd xdd xddd 2";
// console.log(name);

let address, zip, state;

address = "Jana Pawła 2";

console.log(address);

// VAR VS CONST VS LET
// old way of declaring variables (since 1995)
var value = "some value";

// it was introduced in i believe 2015 or sth thus
// let and const should be used instead of var
let name = "John";

// people generally use const as much as possible, but
// when they know that data will change they prefer using
// let from var
const lastName = "Johnson";

const website = "youtube";
const url = "https://www." + website + ".com";
console.log(url);

// some numbers
const num = 34;
const num2 = 2.324;

const addSum = num + num2;

console.log(addSum);

let number = 34;
number += 6;
number--;
number++;
console.log(number % 3);
console.log(number);

// Implicit type conversion
let number3 = "10";
let number4 = "23";

let result = number3 - number4; // -, *, /, etc but not +
console.log(result); // -13

number3 = "10";
number4 = "23";

result = number3 + number4; // +
console.log(result); // "1023" !!!!!

// Data Types
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// bool
let value1 = true;
console.log(typeof value1); // boolean

// null
const result2 = null;
console.log(typeof result2); // object (this is bug in js lol it should return null)

// undefined
let variable3;
console.log(typeof variable3); // undefined

// ARRAYS
const friends = ["john", 2, "pussy", "sussy", 3.54, undefined];
console.log("Type: " + typeof friends + " | friends: " + friends);
console.log(friends[3]);
console.log(friends);
console.log(friends.length); // 6

let bestFriend = friends[0];
friends[2] = bestFriend;
console.log(friends[2]); // john

// Functions - declare, invoke
// declaration
function hello() {
  console.log("Hello There!");
}

// invocation
hello();

// Function - params, arguments
// with parameters we don't have to use variable types like var, let, const
function greet(name) {
  console.log("Hello " + name + "!");
}

greet("bob");
greet("Siusian");

// JS Functions RETURN
// All function by default are going to return undefined
function calculate(value) {
  const newValue = value * 2.54;
  console.log("Value in cm => " + newValue + " cm");
  return newValue;
}

const width = calculate(100);
const height = calculate(80);

const dimensions = [width, height];
console.log(dimensions);

// FUNCTION EXPRESSIONS

// anonymous function
const add = function (num1, num2) {
  return num1 + num2;
};

let newValue = add(3, 6);
console.log(newValue); // 9

// Arrow Function
const multiply = (num1, num2) => num1 * num2;
newValue = multiply(3, 6);
console.log(newValue); // 18

// Objects
const person = {
  name: "John",
  lastName: "Nigghul",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "siusiaan", "ahmed"],
  greeting: function () {
    console.log("Hello, I'm John");
  },
  // From ES6 we can also use this shorthand to set up
  // our methods
  greeting2() {
    console.log("Hello, I'm John");
  },
};

console.log(person.name);
console.log(person.siblings[2]);
person.greeting(); // Invoking method
person.greeting2(); // Invoking method

// CONDITIONAL STATEMENTS
// >, <, >=, <=, ==, ===, !=, !===

const value2 = false;

if (!value2) {
  console.log("value is not true");
}

// == checks only value type
// === check value AND type

const numb1 = 6;
const numb2 = "6";

const val1 = numb1 == numb2; // value is the same
const val2 = numb1 === numb2; // type is different

console.log("val1 = " + val1); // true
console.log("val2 = " + val2); // false

// LOGICAL OPERATORS
// (|| - OR), (&& - AND),

// SWITCH STATEMENTS
const dice = 1;
switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("you got three");
    break;
  default:
    console.log("you did not roll the dice");
}

// WHILE LOOP
let amount = 10;

while (amount > 0) {
  console.log("amount = " + amount);
  amount--;
}

// DO WHILE LOOP
let money = 0;
do {
  console.log("money = " + money);
  money++;
} while (money < 10);

// do while will run at least once
money = 120;
do {
  console.log("money = " + money);
  money++;
} while (money < 10);

// for loops
// let i;
for (let i = 0; i <= 10; i++) {
  console.log("for loop number i = " + i);
}
