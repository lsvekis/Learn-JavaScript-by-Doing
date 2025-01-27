// Exercise 54: Nested Object Destructuring

let person = {
address: {
}
};
let {
address: { city, zip }
} = person;
console.log(city, zip);