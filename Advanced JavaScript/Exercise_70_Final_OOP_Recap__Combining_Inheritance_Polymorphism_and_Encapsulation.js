// Exercise 70: Final OOP Recap – Combining Inheritance, Polymorphism, and Encapsulation

class Account {
#balance = 0;
constructor(owner) {
this.owner = owner;
}
deposit(amount) {
this.#balance += amount;
}
getBalance() {
return this.#balance;
}
}
class SavingsAccount extends Account {
constructor(owner, interestRate) {
super(owner);
this.interestRate = interestRate;
}
applyInterest() {
let newBalance = this.getBalance() * (1 + this.interestRate);
let diff = newBalance - this.getBalance();
this.deposit(diff);
}
}
let acc = new SavingsAccount("Alice", 0.05);
acc.deposit(1000);
acc.applyInterest();
console.log(acc.getBalance()); // 1050
We have encapsulation (#balance), inheritance (extends), and polymorphism (if we had multiple account types implementing different behaviors).