// var, let, const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// global scope
var amount = 100;

function greet() {
  // local scope
  var random = "some random value";
  console.log(`${amount}, ${random}`);
}

//console.log(random) // error: random is not defined

greet();

// var

var total = 1000;
var test = true;

if (test) {
  // we used var and change the global value
  var total = "asddasds";
  console.log("true");
}

console.log(total); // asddasds

// let, const

let total2 = 1000;
let test2 = true;

if (test) {
  let total2 = "asddasds";
  let value2 = "some random value";
  console.log("hello there");
}

console.log(total2); // 1000

// blocked scope - no collisions

{
  let total = 100;
  console.log(total);
}

{
  let total = 10230;
  console.log(total);
}
