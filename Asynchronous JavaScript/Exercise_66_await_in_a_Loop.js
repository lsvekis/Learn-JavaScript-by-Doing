// Exercise 66: await in a Loop

function fetchNumber(num) {
return new Promise((resolve) => {
setTimeout(() => resolve(num), 300);
});
}
async function sequence() {
for (let i = 1; i <= 3; i++) {
let val = await fetchNumber(i);
console.log("Got number:", val);
}
console.log("Done with loop");
}
sequence();
Each iteration must wait ~300ms for fetchNumber(i).