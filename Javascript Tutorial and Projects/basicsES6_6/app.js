// Rest Operator ...
// gathers / collects the items

// arrays
const fruit = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...rest] = fruit;
console.log(first); // apple
console.log(second); // orange
console.log(rest); // (2) ['orange', 'lemon']

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...restObjs } = person;
console.log(job); // developer
console.log(restObjs); // {name: 'john', lastName: 'smith'}

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores); // (7) [34, 62, 63, 74, 2, 64, 72]
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`average score is ${total / scores.length}`);
};

getAverage(person.name, 34, 62, 63, 74, 2, 64, 72);

const testScores = [34, 62, 63, 74, 2, 64, 72];
getAverage(person.name, ...testScores);

// Array.from and Array.of

// of creates a new Array instance from a variable number of arguments
const friends = Array.of("john", 2, false);
console.log(friends);

// from - returns Array Object from any object with a length property or an iterable
// object
// from turns array-like into array - string, nodeList, Set

const text = "text";
console.log(Array.from(text)); //(4) ['t', 'e', 'x', 't']

function countTotal() {
  console.log(arguments); // Arguments(9) [23, 645, 63, 123, 68, 5, 33, 4, 346, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  let total = Array.from(arguments).reduce((acc, curr) => (acc += curr), 0);
  console.log(total); // 1310
}

countTotal(23, 645, 63, 123, 68, 5, 33, 4, 346);
