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
