// default parameters, arrow functions gotchas

const john = "John";
const peter = "Peter";

sayHi(); // this will work, because we declared a function before, so because of hoisting
// the function gets moved up

// default parameter
function sayHi(person = "bob") {
  console.log(`hi ${person}`);
}

//sayHello(peter); // this will not work, because we assigned the function to
// the variable, and variable will not move up (hoisting)

const sayHello = (person = "siusian") => console.log(`hello ${person}`);

// Destructuring
// faaster / easier way to access / unpack values from arrays
// objects into variables
// arrays

const fruits = ["orange", "banana", "lemon"];
const friends = ["john2", "peter2", "bob2", "anna2", "kelly2"];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon); // orange banana lemon

// destructuring
const [john2, dasdfsdsa, bob2, anna2, kelly2, susuan] = friends;
console.log(john2, dasdfsdsa, bob2, anna2, kelly2, susuan);
// john2 peter2 bob2 anna2 kelly2 undefined

// skipping values with ','
const [john3, , , , kelly3] = friends;
console.log(john3, kelly3); // john2 kelly2

// Swap Variables

// without array destructuring
let first = "bob";
let second = "john";

let temp = second;
second = first;
first = temp;

console.log(first, second); // john, bob

first = "bob";
second = "john";

// with array destructuring
[second, first] = [first, second];

console.log(first, second); // john, bob
