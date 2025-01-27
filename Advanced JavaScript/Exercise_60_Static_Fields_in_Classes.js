// Exercise 60: Static Fields in Classes

class Registry {
static records = [];
static addRecord(data) {
Registry.records.push(data);
}
}
Registry.addRecord({ id: 1 });
Registry.addRecord({ id: 2 });
console.log(Registry.records); // [{ id: 1 }, { id: 2 }]