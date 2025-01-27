// Exercise 84: Form Validation with Delegation

<form id="myForm">
<input type="text" name="username" required />
<input type="email" name="email" required />
<button type="submit">Submit</button>
document.getElementById("myForm").addEventListener("submit", (e) => {
let form = e.target;
if (!form.checkValidity()) {
e.preventDefault();
console.log("Form invalid, not submitted.");
}
});
The form’s built-in .checkValidity() checks required or other constraints.
event.target is the form; we handle validation once.