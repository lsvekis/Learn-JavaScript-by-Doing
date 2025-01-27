// Exercise 35: Generating SQL-Like Queries

let tableName = "users";
let condition = "WHERE id = 123";
let query = `
FROM ${tableName}
${condition};
`;
console.log(query);