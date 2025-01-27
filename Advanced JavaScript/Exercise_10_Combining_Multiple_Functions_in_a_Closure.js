// Exercise 10: Combining Multiple Functions in a Closure

function createAccount() {
let balance = 0;
return {
deposit(amount) {
balance += amount;
},
withdraw(amount) {
balance -= amount;
},
getBalance() {
return balance;
}
};
}
let myAccount = createAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
console.log(myAccount.getBalance()); // 70