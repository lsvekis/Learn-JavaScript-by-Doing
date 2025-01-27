// Exercise 78: Checking the Stack Behavior with a Debugger

What You’ll Learn: Using debugger; statement.
Learning Objectives:
function second() {
debugger; // see call stack in DevTools
console.log("Second function");
}
function first() {
second();
}
first();