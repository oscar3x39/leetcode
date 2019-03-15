/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arr = []
  for (const [key, num] of nums.entries()) {
    if (arr[target - num] > -1) {
      return [arr[target - num], key]
    }
    arr[num] = key
  }
};

console.log(twoSum([2, 7, 11, 15], 9))
