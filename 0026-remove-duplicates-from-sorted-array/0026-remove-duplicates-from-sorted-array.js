/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
       let start = 0     //O(1)
    for(i=0;i<nums.length;i++){   //O(n)
        if(nums[i] != nums[i+1]){
            nums[start] = nums[i]
            start++
        }
    }
    return start
};