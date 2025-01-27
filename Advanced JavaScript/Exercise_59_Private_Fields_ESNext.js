// Exercise 59: Private Fields (ESNext)

Exercise 59: Private Fields (ESNext)
class BankAccount {
#balance = 0;
deposit(amount) {
this.#balance += amount;
}
getBalance() {
return this.#balance;
}
}
let acct = new BankAccount();
acct.deposit(100);
console.log(acct.getBalance()); // 100
// console.log(acct.#balance); // SyntaxError: Private field