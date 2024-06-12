/* 
75. Sort Colors
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

var sortColors = function (nums) {
  let last2 = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === 2) {
          nums[i] = nums[last2]
          nums[last2] = 2
          last2--
      }
  }

  let last1 = last2

  for (let i = last2; i >= 0; i--){
      if(nums[i]===1){
          nums[i]=nums[last1]
          nums[last1]=1
          last1--
      }
  }

};