// Hoisting
// function and var declaraations are hoisted
// safer to access only after initialized

// with hoisting you can access varaibles before they are initialized
// function display() { // this function will be moved automatically here (before we call it)
//   console.log("hello world"); // although it is declared at the end of the file
// }

display(); // it works, JS just moves the declaration of 'display' function
// before we call it
console.log(display); // ƒ display() {
// console.log("hello world");
//}

// however we should be careful while calling functions like this
moreComplex(); // thos function will give an error, because variables it uses
// were NOT YET initialized before the function was called

//console.log(firstName); // ERROR: you cannot access const before it is initialized
//console.log(lastName); // ERROR: you cannot access let before it is initialized
console.log(random); // It will work, but returns undefined, so it's not that useful at all

const firstName = "john";
let lastName = "fac";
var random = "random";

console.log(firstName);

function display() {
  console.log("hello world");
}

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
