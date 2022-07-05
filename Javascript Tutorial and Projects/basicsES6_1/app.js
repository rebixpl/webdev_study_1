// var let const
// define update redefine
// const cannot mutate primitive type

//define
var num = 100;
//update
num = 200;
//redefine !!!!!!!
var num = "potato"; // wtf why is this even possible

// define
let amount = 100;
//update
amount = 200;
// redefine
//let amount = "dasda"; // error -> cannot redefine a let variable

// define
const total = 2301;
// update
//total = 233; // error -> assignment to a constant value
// redefine
//const total = 'dfs'; // error -> const is const

// we can mutate const variables, but not primitive types
const person = { name: "pudzian" };
person.name = "waldemar";
console.log(person.name); // waldemar
