/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i += 1) {
        const num1 = nums[i];
        for (let j = i + 1; j < nums.length; j += 1) {
            const num2 = nums[j];
            if (num1 + num2 === target) {
                return [i, j];
            }
        }
    }
};

export default twoSum;
