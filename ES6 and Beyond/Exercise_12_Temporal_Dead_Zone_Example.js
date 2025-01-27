// Exercise 12: Temporal Dead Zone Example

function checkTDZ() {
// console.log(tdVar); // ReferenceError in TDZ
let tdVar = 10;
console.log(tdVar);
}
checkTDZ();
The variable is hoisted but not initialized; referencing it before initialization triggers error.