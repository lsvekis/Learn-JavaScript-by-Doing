// Exercise 3: Hiding Implementation Details

function createSecret(secret) {
return {
getSecret: function() {
return secret;
}
};
}
let secretKeeper = createSecret("TopSecret!");
console.log(secretKeeper.getSecret()); // "TopSecret!"
// console.log(secretKeeper.secret); // undefined, can't directly access
secret isn’t accessible outside createSecret except through getSecret().