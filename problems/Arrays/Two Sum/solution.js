/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function twoSum(nums, target) {
    const diffs = {};
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        // I need to compare with undefined because if(0) is false
        if (diffs[num] !== undefined) {
            return [diffs[num], i];
        }
        diffs[target - num] = i;
    }
    return null;
};

export default twoSum;
