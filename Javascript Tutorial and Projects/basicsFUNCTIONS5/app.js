// Arrow Functions or Fat Arrow Functions
// reg function : 'this' refers parent, left of the dot
// arrow function : 'this' refers to it's current surrounding scope

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    console.log(this);
    // this will not work this.firstName and this.lastName will be undefined
    // setTimeout(function () {
    //   console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    //   console.log(`my name is ${this.firstName} ${this.lastName}`);
    // }, 2000);

    // we can solve this by using arrow function, because this will refer to
    // surrounding scope which in this case is an object not a window
    setTimeout(() => {
      console.log(this); // {firstName: 'bob', lastName: 'smith', sayName: ƒ}
      console.log(`my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: "anna",
  lastName: "smth",
  sayName: () => {
    console.log(this);
    console.log(`my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName(); // {firstName: 'bob', lastName: 'smith', sayName: ƒ}

// anna.sayName(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn.addEventListener("click", function () {
  console.log(this); // <button class="btn" style:"color:red">Click Me</button>
  this.style.color = "red";
});

btn2.addEventListener("click", () => {
  console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  this.style.color = "red"; // Error
});

btn3.addEventListener("click", function () {
  console.log(this); // button
  setTimeout(() => {
    // here this refers to current surrounding scope ( so btn3 element )
    this.style.color = "red";
  }, 2000);
});
