/* ES6 Classes - Syntactic Sugar
Prototypal Inheritance
*/

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  // the properties are gonna be on every instance
  bank = "SIWYBANK";

  // methods are gonna be on a class prototype
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 0);
console.log(john); // Account {name: 'john', balance: 0}
john.deposit(500); // Hello john, your balance is 500
