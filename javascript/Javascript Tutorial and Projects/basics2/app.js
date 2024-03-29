// String properties and methods
let text = " Peter Jordan";
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2)); // e
console.log(text.charAt(text.length - 1)); // n
console.log(text.indexOf("r")); // 5
console.log(text.trim());
console.log(text.trim().startsWith("Peter")); // true
console.log(text.includes("eter")); // true
console.log(text.slice(0, 3)); // " Pe"
console.log(text.slice(-3)); // "dan"

// Template Literals - ES6+
// Backtick characters ``
// Interpolation ${} - insert expression(value)
const name = "John";
const age = 25;
const sentence = `Hey it's ${name} and he is ${age} years old.`;
console.log(sentence);

// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

// length
console.log(names.length); // 5
console.log(names[names.length - 1]); // ben

// concat - combining arrays
const lastNames = ["pepper", "fac", "onion", "piztah"];
const allNames = names.concat(lastNames);
console.log(allNames); // ['john', 'bobo', 'barry', 'olga', 'ben', 'pepper', 'fac', 'onion', 'piztah']

// reverse
console.log(allNames.reverse()); // ['piztah', 'onion', 'fac', 'pepper', 'ben', 'olga', 'barry', 'bobo', 'john']

// unshift - add to the beginning of the array
allNames.unshift("siussy");
console.log(allNames[0]); // siussy

// shift - removes first item in an array
allNames.shift();
console.log(allNames[0]); // piztah

// push - add items to the end of an array
console.log(allNames[allNames.length - 1]); // john
allNames.push("kebab");
console.log(allNames[allNames.length - 1]); // kebab

// pop - remove items from the end of an array
console.log(allNames[allNames.length - 1]); // kebab
allNames.pop();
console.log(allNames[allNames.length - 1]); // john

// splice - mutates the original array
console.log(`allNames : ${allNames}`);
const specificNames = allNames.splice(2, 2);
// notice that specificNames were removed from original allNames array
console.log(`specificNames : ${specificNames}`);
console.log(`allNames : ${allNames}`);

// Exercise - Full name
const names2 = ["anna", "sussy", "bob", "john"];
const lastName = "Baryła";
let newArray = [];

for (let i = 0; i <= names2.length - 1; i++) {
  newArray.push(`${names2[i]} ${lastName}`);
}

console.log(newArray); // ['anna Baryła', 'sussy Baryła', 'bob Baryła', 'john Baryła']

// Exercise - Calculate total
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([32, 543, 766, 34, 2.43]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

// Reference vs Value
let person = { name: "bob" };
let person2 = person;
person2.name = "adolf";
console.log(`person.name: ${person.name}`); // adolf
console.log(`person2.name: ${person2.name}`); // adolf

// copy object with spread operator ...
let person3 = { name: "bob" };
let person4 = { ...person3 }; // don't get me a reference to person3, just copy the data with ...
person4.name = "adolf";
console.log(`person3.name: ${person3.name}`); // bob
console.log(`person4.name: ${person2.name}`); // adolf

// Null and Undefined
// undefined - javascript can not find value for this
// variable without value
// missing function arguments
// missing object properties

// null - developer sets the value

let num = 20 + null; // 20 + 0
console.log(num); // 20
let num2 = 20 + undefined;
console.log(num2); // NaN (not a number error)

// Truthy and Falsy
// "" - false
// "fds" - true
// `` - false
// `das` - true
// 1 - true
// 0 - false
// -0 - false
// -1 - true
// NaN - false
// null - false
// undefined - false

let xddd = undefined;

if (xddd) {
  console.log(`that's true`);
}

// Ternary Operator
// condition ? (runs if true) : (runs if false)
const value2 = 1 < 0;

value2 ? console.log(`true`) : console.log(`false`);

//  Callback Functions, Higher Order Functions

// Callback function is the one that we are passing
// to a High Order Function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

// cb - callback function, you can decide when you
// invoke it in code
// High Order Function is that one that accepts a function
function greet(name, cb) {
  const myName = "Waldemar";
  console.log(`${cb(name)}, my name is ${myName}`);
}

// Callback function is the one that we are passing
// to a High Order Function
greet("bobo", morning);
greet("peter", afternoon);

///// Array iterators
// forEach, map, filter, find, reduce
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "siusian", age: 30, position: "the boss" },
];

// forEach
// does not return a new array
people.forEach((person) => console.log(person.position.toUpperCase()));

// map
// does return a new array
// does not change size of original array
// uses values from original array when making a new one
const ages = people.map((person) => person.age);
console.log(ages); // (3) [20, 25, 30]

const newPeople = people.map(function (person) {
  return {
    firstname: person.name.toUpperCase(),
    oldAge: person.age,
    newAge: person.age + 20,
    position: person.position,
  };
});
console.log(newPeople);

const names3 = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});
console.log(names3);

document.body.innerHTML = names3.join("");

// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition
const people3 = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "siusian", age: 30, position: "the boss" },
  { name: "hanna", age: 35, position: "the boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

console.log(youngPeople); // returns an array with 2 items (bob and peter)

// find
// returns single instance (in this case object)
// returns first match, if no match undefined
// great for getting unique value
const people4 = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "peter", age: 25, position: "designer", id: 2 },
  { name: "siusian", age: 30, position: "the boss", id: 3 },
  { name: "hanna", age: 35, position: "the boss", id: 4 },
];

const person5 = people4.find(function (person) {
  return person.id === 3;
});

console.log(person5); // {name: 'siusian', age: 30, position: 'the boss', id: 3}

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value
const people5 = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "siusian", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "hanna", age: 35, position: "the boss", id: 4, salary: 500 },
];

const total = people5.reduce(function (acc, curr) {
  console.log(`total: ${acc}`);
  console.log(`current money: ${curr.salary}`);
  acc += curr.salary;
  return acc;
}, 0);

console.log(total);

// Math Object
const number2 = 3.54376;
const result = Math.floor(number2);
console.log(result); // 3

const result2 = Math.ceil(number2);
console.log(result2); // 4

const result3 = Math.sqrt(25);
console.log(result3); // 5

const result4 = Math.PI;
console.log(result4); // 3.141592653589793

const result5 = Math.min(1, 5, 6, 2, 8, 5, 2, 8, 34, 63, 13, 7, 67, 34, 3);
const result6 = Math.max(1, 5, 6, 2, 8, 5, 2, 8, 34, 63, 13, 7, 67, 34, 3);
console.log(result5); // 1
console.log(result6); // 67

const result7 = Math.random();
console.log(result7); // 0.02138528679250551

// result8 and result9 work the same way ( they generate random numbers from 1 to 10)
const result8 = Math.ceil(Math.random() * 10);
console.log(result8); // 1

const result9 = Math.floor(Math.random() * 10 + 1);
console.log(result9); // 10

// Date Object
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
// const date = new Date("11/19/2004");
const month = date.getMonth();
console.log(month); // 5
console.log(months[month]); // June

const day = date.getDay();
console.log(day); // 2
console.log(days[day]); // Tuesday

console.log(date.getFullYear()); // 2022

const sentence2 = `${days[day]}, ${date.getDate()} ${months[month]}
${date.getFullYear()}`;

console.log(sentence2); // Tuesday, 21 June 2022

document.body.innerHTML = sentence2;

// DOM - general concepts
document.body.style.backgroundColor = "wheat";
const element = document.getElementById("btn");
document.querySelector("element");

// window object
console.log(window); // document object is here

document.body.innerHTML += `<br><br><button id="btn">Click me</button>`;

const btn = document.getElementById("btn");
const nodeName = btn.nodeName;
const css = btn.style;

console.log(btn); // <button id="btn">Click me</button>
console.log(nodeName); // BUTTON
console.log(css); // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
