// Exercise 35: Debouncing Function Calls

function debounce(fn, wait) {
let timeout;
return function(...args) {
clearTimeout(timeout);
timeout = setTimeout(() => fn(...args), wait);
};
}
let debouncedLog = debounce((msg) => console.log(msg), 500);
debouncedLog("Call 1");
debouncedLog("Call 2");
debouncedLog("Call 3");