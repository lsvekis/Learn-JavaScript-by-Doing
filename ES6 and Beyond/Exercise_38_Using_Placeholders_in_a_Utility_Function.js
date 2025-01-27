// Exercise 38: Using Placeholders in a Utility Function

function createEmail(toName, fromName) {
return `Hi ${toName},
This is ${fromName}. Just checking in.
${fromName}`;
}
console.log(createEmail("Chris", "Morgan"));