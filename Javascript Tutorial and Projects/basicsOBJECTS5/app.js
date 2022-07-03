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

// assign, call it later
const susanGreet = greet.bind(susan, "toronto", "CA"); // this will not be called right now
susanGreet(); // it gets called here
