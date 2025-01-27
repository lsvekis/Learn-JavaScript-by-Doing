// Exercise 67: Submitting a Form with submit

Show how event.preventDefault() stops an actual form submission.
<form id="myForm">
<input type="text" name="username"/>
<button type="submit">Submit</button>
let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
e.preventDefault();
console.log("Form not submitted to server. Username:", form.username.value);
});
e.preventDefault() keeps the page from reloading.