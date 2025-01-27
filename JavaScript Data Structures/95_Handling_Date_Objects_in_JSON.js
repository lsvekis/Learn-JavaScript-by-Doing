// 95. Handling Date Objects in JSON

Show that new Date() is converted to a date string.
let schedule = { event: "Meeting", time: new Date() };
let jsonStr = JSON.stringify(schedule);
console.log(jsonStr);
// "time":"2025-01-26T12:34:56.789Z" (example)