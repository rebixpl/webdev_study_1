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
