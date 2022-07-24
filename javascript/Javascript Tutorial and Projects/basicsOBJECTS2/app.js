// this
// points to the left of the dot

const john = {
  firstName: "john",
  lastName: "fac",
  fullName() {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName(); // 'this' will be pointing to john object in this case

///////-----------------------------------------------------

/* In Reg Functions (not arrow) "this"
determined by "HOW"!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

console.log(this); // prints window object

function showThis() {
  console.log(this);
}

const john2 = {
  name: "john",
  showThis: showThis,
};

const waldemar = {
  name: "waldemar",
  showThis: showThis,
};

john2.showThis(); // {name: 'john', showThis: ƒ}
waldemar.showThis(); // {name: 'waldemar', showThis: ƒ}

showThis(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis); // <button class="btn-1">click me</button>
btn2.addEventListener("click", showThis); // <button class="btn-2">click me</button>

btn2.addEventListener("click", function () {
  // on the left side of the . there will be window
  showThis(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
});

/////////-----------------------------------
// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const john3 = createPerson("john", "fac");
john3.fullName();
const siusian = createPerson("siusian", "apple");
siusian.fullName();

// Constructor Functions

// with constructors we us capital letter  to indicate to other dev eloper, that this function is special
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love JS`
    );
  };
  console.log(this);
}

// new - creates new object, points to it, omit return
// if we wouldn't use new, 'this' in Person() function will return window object
const john4 = new Person("john", "fac");

// constructor property
// All Objects in JS have access to constructor property that returns a constructor
// function that created it.
// built in constructor functions
// arrays and functions are objects in JS
const john5 = new Person("john", "fac");
console.log("--------------");
console.log(john5.constructor); /*  ƒ Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName}… */

const bob = {};
console.log(bob.constructor); // ƒ Object() { [native code] }

const list = [];
console.log(list.constructor); // ƒ Array() { [native code] }

const sayHi = function () {};
console.log(sayHi.constructor); // ƒ Function() { [native code] }

const sussy = new john5.constructor("sussy", "carpenter");
sussy.fullName();
