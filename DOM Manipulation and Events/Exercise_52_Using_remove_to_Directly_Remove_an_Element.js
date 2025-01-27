// Exercise 52: Using remove() to Directly Remove an Element

Exercise 52: Using remove() to Directly Remove an Element
Use element.remove() if your environment supports it.
<p id="message">I'll be removed</p>
let msg = document.getElementById("message");
msg.remove();
remove() is more direct, but older browsers might need polyfills.