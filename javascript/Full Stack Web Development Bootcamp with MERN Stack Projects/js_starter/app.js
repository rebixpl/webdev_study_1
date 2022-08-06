var Human = {
  name: "Bob",
  year: 2000,
  // This is a method bound to the Human object
  sayHi: function () {
    console.log(this); // returns Human Object
    console.log("Hi, I am " + this.name); // Hi, I am Bob

    // This is a regular function (not an method), so it is not bound to the object
    function someFunc() {
      console.log(this); // returns Window Object (because it is not a method, methods are bound to an object)
    }
    someFunc();
  },
};

Human.sayHi();
