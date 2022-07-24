// Rest Operator ...
// gathers / collects the items

// arrays
const fruit = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second2, ...rest] = fruit;
console.log(first); // apple
console.log(second2); // orange
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

// Array.from - DOM Elements(NodeList)

const p = document.querySelectorAll("p");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");
const second = document.querySelector("#second");

console.log(p); // it is a node list => NodeList(3) [p, p, p]

// turn nodelist into an array

let pArr = Array.from(p);
console.log(pArr); // (3) [p, p, p]
pArr = pArr.map((item) => `<span>${item.textContent}</span>`).join(" ");

result.innerHTML = pArr;

// second way - we can pass map method right after passing iterable
const text2 = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span> second way`;
}).join(" ");

result2.innerHTML = text2;

///////////////
// find - gets specific item
// findIndex - get's index of the item
// every - every item in the array
// some - at least one item

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "anna" },
];

// filter returns an array
// const anna = people.filter((person) => person.name === "anna");
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

// find returns an object
// const anna = people.find((person) => person.name === "anna");
// console.log(anna.name);

const person2 = people.findIndex((item) => item.id === 3);
console.log(person2); // 3 (index)
console.log(people[person2]); // { id: 3, name: "anna" }

const newPeople = people.slice(0, person2);
console.log(newPeople); // [0: { id: 1, name: "john" }, 1:  { id: 2, name: "peter" }]

// every()
// The every() method tests whether all elements in the array pass the test
// implemented by the provided function. It returns a Boolean value.

const grades = ["A", "B", "A", "B", "C"];

// const allGoodGrades = grades.every((grade) => grade !== "C");
// console.log(allGoodGrades); // false

const goodGrades = ["A", "B", "A", "B"];

const allGoodGrades = goodGrades.every((grade) => grade !== "C");
console.log(allGoodGrades); // true

const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every((number) => number < 40)); // every number is smaller than 40
// expected output: true

// some()
// The some() method tests whether at least one element in the array
// passes the test implemented by the provided function. It returns
// true if, in the array, it finds an element for which the provided
// function returns true; otherwise it returns false.

const array = [1, 2, 3, 4, 5];

console.log(array.some((element) => element % 2 === 0)); // checks whether an element is even
// expected output: true

// const oneBadGrade = grades.some((grade) => grade === "C");
// console.log(oneBadGrade); // true

const oneBadGrade = goodGrades.some((grade) => grade === "C");
console.log(oneBadGrade); // false
