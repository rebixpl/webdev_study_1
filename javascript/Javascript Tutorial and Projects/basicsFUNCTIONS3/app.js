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

///////// Closure
// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Welcome ${name}, your balance: ${balance}`);
//   }
//   return showBalance;
// }

// newAccount("siusian", 500)();

// const john = newAccount("john", 300);
// const bob = newAccount("bob", 4300);

// john();
// bob();

///////
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Welcome ${name}, your balance: ${balance}`);
  }

  function deopsit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Sorry ${name}, not enough funds!`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deopsit: deopsit, withdraw: withdraw };
}

const john = newAccount("john", 300);
const bob = newAccount("bob", 4300);

console.log(john); // {showBalance: ƒ, deopsit: ƒ, withdraw: ƒ}

john.showBalance();
john.deopsit(233);
john.deopsit(213);
bob.showBalance();
bob.withdraw(2033);
bob.withdraw(4234);
bob.showBalance();
