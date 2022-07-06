// Object Destructuring
// objects into variables

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// without objecet destructuring
// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister); // bob sanders jane

// with object destructuring
// unlike with arrays, properties names with object MUST MATCH
// but we can use aliases to create new names for variables => first:firstName
const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favSibling },
} = bob;
console.log(firstName, last, city, zip, favSibling); // bob sanders chicago undefined jane
// zip does not return siblings, but it returns undefined

// Destructuring Function Parameters
function printPerson({ first, last, city }) {
  console.log(first, last, city);
}

printPerson(bob); // bob sanders chicago
