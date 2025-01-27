// Exercise 66: Using change Event

<select id="dropdown">
<option value="A">Option A</option>
<option value="B">Option B</option>
let dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => {
console.log("Selected:", dropdown.value);
});
For <select>, change fires when the user picks a new option (and defocuses or confirms the selection).