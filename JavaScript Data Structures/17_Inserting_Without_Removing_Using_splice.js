// 17. Inserting Without Removing Using splice()

17. Inserting Without Removing Using splice()
let arr = [1, 2, 3];
arr.splice(1, 0, "a", "b");
console.log(arr);
splice(1, 0, "a", "b") inserts "a", "b" at index 1 but removes 0 items.