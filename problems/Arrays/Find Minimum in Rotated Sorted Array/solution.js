/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function findMin(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        min = Math.min(min, num);
    }
    return min;
};

export default findMin;
