// Arrow Functions or Fat Arrow Functions
// no name, always expression, assign to variable
// no function keyword
// 'this'

const sayHi = () => console.log("hello");
sayHi();

const double = (value) => value * 2;
console.log(double(10)); // 20

// two parameters and more than one line of code
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

console.log(multiply(4, 6)); // 24

// returning an object
const object = () => ({ name: "john", age: 25 });
const person = object();
console.log(person.name); // john

// arrow functions as callback functions
const nums = [1, 2, 3, 4, 5, 6, 7];
const big = nums.filter((num) => num > 2);
console.log(big); // Array(5) [3, 4, 5, 6, 7]

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("btn clicked"));
