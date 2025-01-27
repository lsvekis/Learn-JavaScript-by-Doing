// 93. Loading JSON from a File (Conceptual, Node or Fetch)

93. Loading JSON from a File (Conceptual, Node or Fetch)
fetch("data.json")
.then(response => response.json())
.then(data => {
console.log("Loaded JSON:", data);
});
The .json() method automatically parses the JSON text into a JavaScript object.