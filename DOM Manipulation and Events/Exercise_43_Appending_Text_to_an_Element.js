// Exercise 43: Appending Text to an Element

<p id="info">Current info: </p>
let info = document.getElementById("info");
info.textContent += " Additional details.";
You can read the old content, then add to it. Or use info.appendChild(document.createTextNode("...")) for more control.