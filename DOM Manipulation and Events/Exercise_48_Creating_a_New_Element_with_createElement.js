// Exercise 48: Creating a New Element with createElement

let newPara = document.createElement("p");
newPara.textContent = "Hello from JavaScript!";
document.body.appendChild(newPara);
createElement("p") returns a detached <p> element.
You must append it somewhere (e.g., document.body) to show it on the page.