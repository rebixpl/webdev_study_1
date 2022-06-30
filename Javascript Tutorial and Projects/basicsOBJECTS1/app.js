// Objects Basics

/* Objects are collections of key (property) value pairs.
If the property value is a function it's called a method 
*/

// object literal syntax, {}
// dot notation

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, i am ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, i am ${name}`);
  },
};

person.age = 420;

// add a property to a object
person.city = "Vatican";
console.log(person.city);
console.log(person);

// delete a property
const value = delete person.siblings;
console.log(value); // will be true if we successfully deleted siblings property from person object
// delete person.siblings;
console.log(person.siblings);
console.log(person);

/////----------------------------

const age = 60;
let random = "random-value";

const person2 = {
  name: "john",
  // age: age, // with ES6 we can omit the name if property name matches the value name
  age, // like this // ES6
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, i am ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, i am ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "vaticanCorpo",
      address: "21/37 pope street",
    },
  },
  "random-value": "random",
  42: 42,
  "key with spaces": "hello world",
};

// nested objects
console.log(person2.job.company.name); // vaticanCorpo
// dot notation vs bracket notation
console.log(person2[42]);
console.log(person2["random-value"]);
console.log(person2[random]); // same as person2["random-value"]
console.log(person2["key with spaces"]);

// set variable as a property value
