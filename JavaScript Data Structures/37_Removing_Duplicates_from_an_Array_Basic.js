// 37. Removing Duplicates from an Array (Basic)

37. Removing Duplicates from an Array (Basic)
let nums = [1, 2, 2, 3, 3, 3];
let unique = [...new Set(nums)];
console.log(unique);
A Set only stores unique values. Spreading it (...) back into an array recovers a duplicate-free array.