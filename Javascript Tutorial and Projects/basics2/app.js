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
