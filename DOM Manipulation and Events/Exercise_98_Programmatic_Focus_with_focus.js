// Exercise 98: Programmatic Focus with focus()

Exercise 98: Programmatic Focus with focus()
<input type="text" id="field" />
<button id="btn">Focus Input</button>
let btn = document.getElementById("btn");
let field = document.getElementById("field");
btn.addEventListener("click", () => {
field.focus();
});
field.focus() sets the keyboard focus to that input, typically showing the cursor.