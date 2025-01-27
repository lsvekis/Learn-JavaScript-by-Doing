// Exercise 97: Using a Function to Create Dynamic Object Keys

function getKeyName() {
return "dynamicKey";
}
let obj = {
[getKeyName()]: "Dynamic Value"
};
console.log(obj.dynamicKey);
[getKeyName()] is a computed property name.