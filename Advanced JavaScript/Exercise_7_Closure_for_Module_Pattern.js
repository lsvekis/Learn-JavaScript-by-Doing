// Exercise 7: Closure for Module Pattern

let userModule = (function() {
let userName = "Alice";
function getName() {
return userName;
}
return {
};
})();
console.log(userModule.getName()); // "Alice"