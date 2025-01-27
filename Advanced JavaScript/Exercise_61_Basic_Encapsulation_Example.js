// Exercise 61: Basic Encapsulation Example

class SecretHolder {
#secret;
constructor(secret) {
this.#secret = secret;
}
getSecret() {
return this.#secret;
}
}
let holder = new SecretHolder("classified");
console.log(holder.getSecret());  // "classified"
// console.log(holder.#secret);   // Error, private
This ESNext private field ensures the secret can only be accessed via getSecret().