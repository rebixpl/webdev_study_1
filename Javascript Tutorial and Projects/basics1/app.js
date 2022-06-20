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
