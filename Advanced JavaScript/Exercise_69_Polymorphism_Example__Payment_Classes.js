// Exercise 69: Polymorphism Example – Payment Classes

class Payment {
process(amount) {
throw new Error("process() must be overridden");
}
}
class CreditCardPayment extends Payment {
process(amount) {
console.log("Processing credit card payment of $" + amount);
}
}
class PaypalPayment extends Payment {
process(amount) {
console.log("Processing PayPal payment of $" + amount);
}
}
function processOrder(paymentMethod, amount) {
paymentMethod.process(amount);
}
processOrder(new CreditCardPayment(), 100);
processOrder(new PaypalPayment(), 200);