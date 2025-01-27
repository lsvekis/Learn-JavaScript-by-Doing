// Exercise 68: Listening to focus and blur

<input type="text" id="field" />
let field = document.getElementById("field");
field.addEventListener("focus", () => console.log("Field focused"));
field.addEventListener("blur", () => console.log("Field blurred"));