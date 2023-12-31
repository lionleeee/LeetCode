/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (res in map) return [i, map[res]];
        map[nums[i]] = i;
  }
};