// 22. Reducing an Array with reduce()

22. Reducing an Array with reduce()
Understand accumulator pattern with reduce().
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
reduce loops through, carrying an accumulator (acc) that we update each iteration.