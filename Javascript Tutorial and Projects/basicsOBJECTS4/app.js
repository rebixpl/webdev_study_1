// call - runs instantly, arguments - list of items
// call can change where 'this' is pointing to

// apply - runst instantly, arguments - array of items

// bind - assign, use laater, arguments - list  of items

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

function greet(city, country) {
  console.log(this);
  console.log(
    `my name ${this.name} i am ${this.age} y.o, i live in ${city}, ${country}`
  );
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

console.log(`----------------CALL`);
//--- CALL

greet.call(john, "san diego", "us");
greet.call(susan, "san diego", "us");
greet.call({ name: "peter", age: 321 }, "san diego", "us");

// call and apply works almost the same way, the only thing is arguments list\
// that changes - call has list of items, apply has array of items

console.log(`----------------APPLY`);
//--- APPLY
// this should point to the susan
greet.apply(john, ["san diego", "us"]);
greet.apply(susan, ["san diego", "us"]);
greet.apply({ name: "peter", age: 321 }, ["san diego", "us"]);
