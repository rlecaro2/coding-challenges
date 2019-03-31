/**
 * @param {number[]} nums
 * @return {number}
 * @see {AlgComplexity} O(n)
 * @see {SpaceComplexity} O(1)
 */
const maxSubArray = function maxSubArray(nums) {
    const first = nums[0];
    let max = first;
    let lastBest = first;

    for (let i = 1; i < nums.length; i += 1) {
        const num = nums[i];

        lastBest = Math.max(num, num + lastBest);
        max = Math.max(max, lastBest);
    }

    return max;
};

export default maxSubArray;
