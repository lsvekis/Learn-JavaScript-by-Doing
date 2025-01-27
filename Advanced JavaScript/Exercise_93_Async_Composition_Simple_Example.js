// Exercise 93: Async Composition (Simple Example)

Exercise 93: Async Composition (Simple Example)
function readFile(file) {
return Promise.resolve("Content of " + file);
}
function parseContent(content) {
return Promise.resolve(content.toUpperCase());
}
async function runPipeline(file) {
let raw = await readFile(file);
let parsed = await parseContent(raw);
console.log(parsed);
}
runPipeline("data.txt");