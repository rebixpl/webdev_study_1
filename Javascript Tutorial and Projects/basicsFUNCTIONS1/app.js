// IIFE Immediately Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it

// global namespace, extra steps
const num1 = 30;
const num2 = 50;
// const num1 = 412;

function add() {
  console.log(`the result is: ${num1 + num2}`); // the result is: 80
}
add();

(function () {
  const num3 = 30; // these could be a buttons you got from the DOM
  const num4 = 50; // IIFE gives you a way to protect those variables
  // and not clatter global scope with them at the same time
  console.log(`the result is: ${num3 + num4}`); // the result is: 80
})();

console.log(num1);

(function () {
  // they are scoped locally
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is: ${num3 + num4}`); // the result is: 80
})();

// pass arguments
(function (num3, num4) {
  console.log(`the result is: ${num3 + num4}`); // the result is: 1400
})(500, 900);

// return/assign to a variable
const result = (function (num3, num4) {
  console.log(`the result is: ${num3 + num4}`); // the result is: 1400
  return num3 + num4;
})(500, 900);
