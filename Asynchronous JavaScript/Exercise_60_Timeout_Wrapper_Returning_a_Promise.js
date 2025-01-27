// Exercise 60: Timeout Wrapper Returning a Promise

function wait(ms) {
return new Promise((resolve) => {
setTimeout(resolve, ms);
});
}
wait(500).then(() => console.log("Waited 500ms using a Promise!"));