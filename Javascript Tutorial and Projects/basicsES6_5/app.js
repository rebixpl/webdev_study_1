// New String Methods
// startsWith(), endsWith(), includes(), repeat()

const person = "Janusz Fac";
const employee = "34534-gdf-JANUSZ-FAC";
const manager = "74567-MAN-WALDEMAR-BARYLA";

// startsWith // it is  case sensitive
console.log(person.startsWith("Jan")); // true
console.log(person.startsWith("jan")); // false
console.log(employee.startsWith("gdf", 6)); // true

// endsWith
console.log(manager.endsWith("YLA")); // true
console.log(manager.endsWith("MAN", 9)); // true

// includes
console.log(manager.includes("WALDEMAR")); // true

// repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount);
console.log(multiplyPeople(person)); // Janusz FacJanusz FacJanusz FacJanusz FacJanusz Fac

// FOR OF - LOOP
// for of - loops through the values of an iterable object
// String, Array, Map, Set etc, - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ["apple", "orange", "banana", "peach"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}

console.log(shortName); // JohnSmithPepperIII

for (const fruit of fruits) {
  if (fruit === "banana") {
    break;
  }
  console.log(fruit);
}
