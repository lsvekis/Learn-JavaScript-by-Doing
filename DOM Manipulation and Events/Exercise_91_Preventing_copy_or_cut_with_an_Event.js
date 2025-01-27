// Exercise 91: Preventing copy or cut with an Event

document.addEventListener("copy", (e) => {
e.preventDefault();
console.log("Copy prevented!");
});
The copy event can be canceled with preventDefault(), though users can still do other workarounds, so it’s not a strong security measure.