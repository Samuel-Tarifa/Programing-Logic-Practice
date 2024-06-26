/* 
945. Minimum Increment to Make Array Unique
You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.

Return the minimum number of moves to make every value in nums unique.

The test cases are generated so that the answer fits in a 32-bit integer.
*/

var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);

  let counter = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      counter++;
      nums[i]++;
    }
    if (nums[i] < nums[i - 1]) {
      counter += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }

  return counter;
};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
