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
