// Exercise 37: Checking for Existence of an Element

Test if querySelector() returned null.
let found = document.querySelector("#nonExistent");
if (!found) {
console.log("Element not found!");
}
If an element with id="nonExistent" doesn’t exist, querySelector returns null.