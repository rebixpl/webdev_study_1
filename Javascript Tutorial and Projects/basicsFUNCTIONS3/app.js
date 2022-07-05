// Closure
// closures gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = "secret";

  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }

  return inner;
  inner();
}

outer()();
const value = outer();
value(); // inner() still has acces to a private scope variable from outer()
// even though outer() was called and does not longer exist
