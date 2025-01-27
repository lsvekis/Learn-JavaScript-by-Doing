// 79. Parameterized Method in an Object

let cart = {
addItem(name, price) {
this.items.push({ name, price });
}
};
cart.addItem("Book", 9.99);
cart.addItem("Pen", 1.49);
console.log(cart.items);