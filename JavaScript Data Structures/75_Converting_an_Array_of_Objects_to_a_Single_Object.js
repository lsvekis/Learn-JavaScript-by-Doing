// 75. Converting an Array of Objects to a Single Object

let people = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" }
];
let dict = people.reduce((acc, person) => {
acc[person.id] = person;
return acc;
}, {});
console.log(dict);