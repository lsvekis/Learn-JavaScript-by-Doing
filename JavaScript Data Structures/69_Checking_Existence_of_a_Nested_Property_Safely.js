// 69. Checking Existence of a Nested Property Safely

What You’ll Learn: Optional chaining (ES2020) or short-circuit.
Learning Objectives:
let data = {};
// console.log(data.user.profile); // Error
console.log(data?.user?.profile); // undefined (safe to access)
?. (optional chaining) stops evaluation if data.user is undefined, returning undefined instead of throwing an error.