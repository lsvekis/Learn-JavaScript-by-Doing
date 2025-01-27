// Exercise 76: Ignoring Certain Parameters and Using Rest

function show(name, ...otherDetails) {
console.log(`Name: ${name}`);
console.log(`Other details: ${otherDetails}`);
}
show("Emma", 25, "Engineer", "NY");