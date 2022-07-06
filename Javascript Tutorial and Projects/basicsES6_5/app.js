// New String Methods
// startsWith(), endsWith(), includes(), repeat()

const person = "Janusz Fac";
const employee = "34534-gdf-JANUSZ-FAC";
const manager = "74567-MAN-WALDEMAR-BARYLA";

// startsWith // it is  case sensitive
console.log(person.startsWith("Jan")); // true
console.log(person.startsWith("jan")); // false
console.log(employee.startsWith("gdf", 6)); // true

// endsWith
console.log(manager.endsWith("YLA")); // true
console.log(manager.endsWith("MAN", 9)); // true

// includes
console.log(manager.includes("WALDEMAR")); // true

// repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount);
console.log(multiplyPeople(person)); // Janusz FacJanusz FacJanusz FacJanusz FacJanusz Fac

// FOR OF - LOOP
// for of - loops through the values of an iterable object
// String, Array, Map, Set etc, - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ["apple", "orange", "banana", "peach"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}

console.log(shortName); // JohnSmithPepperIII

for (const fruit of fruits) {
  if (fruit === "banana") {
    break;
  }
  console.log(fruit);
}

////// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters); // (5) ['u', 'd', 'e', 'm', 'y']

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log(friends); // (6) ['john', 'peter', 'bob', 'arnold', 'susan', 'anna']

// reference
// const newFriends = friends;
const newFriends = [...friends]; // copy of the items (not a reference to original array)
newFriends[0] = "waldemar";
console.log(newFriends); // ['waldemar', 'peter', 'bob', 'arnold', 'susan', 'anna']
console.log(friends); // ['john', 'peter', 'bob', 'arnold', 'susan', 'anna']

/////// Spread Operator ...
// objects
// ES2018 - ES8

const person2 = { name: "john", job: "developer" };
const newPerson = { ...person2, city: "berlin", name: "peter" };
console.log(newPerson); // {name: 'peter', job: 'developer', city: 'berlin'}
// name peoperty was overriden from john to peter

///// Spread Operator - DOM Elements
const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

// console.log(headings.map((item) => console.log(item))); // error headings is not an array

const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join(` `);

result.innerHTML = text;

///////// Spread Operator - Functions Arguments
const numbers = [23, 66, 85, 23, 74, 34, 71];

console.log(Math.max(numbers)); // NaN - we cannot pass an array directly to a max() function
console.log(Math.max(...numbers)); // 85

const john2 = ["John", "Paul 2"];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name}, ${lastName}`);
};

sayHello(...john2); // Hello John, Paul 2
