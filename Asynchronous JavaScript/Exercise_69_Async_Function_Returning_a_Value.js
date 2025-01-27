// Exercise 69: Async Function Returning a Value

Show that we can capture the returned data with .then() or another await.
async function getMessage() {
return "Hello from async function!";
}
getMessage().then((msg) => console.log(msg));