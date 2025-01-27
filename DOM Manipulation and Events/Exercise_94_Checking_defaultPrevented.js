// Exercise 94: Checking defaultPrevented

<a href="https://example.com" id="link">Go</a>
let link = document.getElementById("link");
link.addEventListener("click", (e) => {
e.preventDefault();
});
link.addEventListener("click", (e) => {
console.log("Was default prevented?", e.defaultPrevented);
});
The first listener calls preventDefault, so the second sees e.defaultPrevented === true.