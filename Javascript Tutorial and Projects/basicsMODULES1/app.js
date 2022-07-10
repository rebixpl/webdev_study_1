// There are two types of exports:

// Named Exports (Zero or more exports per module)
// Default Exports (One per module)

// Named exports are useful to export several values. During the import,
// it is mandatory to use the same name of the corresponding object.
import { random, people } from "./utils/data.js";

// Default exports are useful to export only a single object, function,
// variable. During the import, we can use any name to import.
import showPeople from "./utils/showPeople.js";
import get from "./utils/getElement.js";

const container = get(".container");
const btn = get(".btn");
// const container1 = get(".container1");
// console.log(container1);

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
