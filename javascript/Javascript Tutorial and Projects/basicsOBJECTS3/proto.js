/* Prototypal Inheritance Model 
JS uses prototypal inheritance model. That means that every constructor
function/class has a prototype property that is shared by every instance
of the constructor/class. So any properties and methods or prototype can 
be accessed by every instance. Prototype property returns an object
*/

/* Property Lookup
if child does not have ask parent
Everything in JS is an Object */

// constructor
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

console.log(Account.prototype); /* Object
  constructor: ƒ Account(name, initialBalance)
  [[Prototype]]: Object
  */

// In case we have many objects like thousands it makes sense to create a
// prototype, instead of copying every time the same functionality in a constructor
Account.prototype.bank = "GRAYBANK";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

console.log(john.bank);

john.deposit(300); // Hello john, your balance is 500
console.log(john.balance); // 500
