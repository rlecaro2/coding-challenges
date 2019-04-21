/** USED SOLUTION
 * Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
    const results = new Array(target + 1).fill(0);
    results[0] = 1;

    for (let i = 0; i <= target; i += 1) {
        for (let j = 0; j < nums.length; j += 1) {
            const num = nums[j];
            if (num <= i) {
                results[i] += results[i - num];
            }
        }
    }

    return results[target];
};

export default combinationSum4;
