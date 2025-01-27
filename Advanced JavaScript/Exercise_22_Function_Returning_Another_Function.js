// Exercise 22: Function Returning Another Function

function createLoggerFunction() {
return function(text) {
console.log("Logged:", text);
};
}
let loggerFn = createLoggerFunction();
loggerFn("Test message");