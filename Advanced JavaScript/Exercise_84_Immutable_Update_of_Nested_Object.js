// Exercise 84: Immutable Update of Nested Object

function updateNested(state, newValue) {
return {
nested: {
}
};
}
let state = { x: 10, nested: { c: 2 } };
let newState = updateNested(state, 42);
console.log(state);    // { x: 10, nested: { c: 2 } }
console.log(newState); // { x: 10, nested: { c: 42 } }