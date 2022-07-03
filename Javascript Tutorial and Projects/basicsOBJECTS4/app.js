// call - runs instantly, arguments - list of items
// call can change where 'this' is pointing to

const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`my name ${this.name} i am ${this.age} y.o`);
  },
};

const susan = {
  name: "susan",
  age: 21,
};

function greet() {
  console.log(this);
  console.log(`my name ${this.name} i am ${this.age} y.o`);
}

john.greet();

// it doen't work ( points to the window object )
// const secondGreet = john.greet;
// secondGreet();

// this should point to the john
greet.call(john); // my name john i am 24 y.o

// this should point to the susan
greet.call(susan); // my name susan i am 21 y.o

greet.call({ name: "peter", age: 321 }); // my name peter i am 321 y.o

john.greet.call(susan); // my name susan i am 21 y.o
