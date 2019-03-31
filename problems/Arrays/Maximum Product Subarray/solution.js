/**
 * @param {number[]} nums
 * @return {number}
 * @see {AlgComplexity} O(n)
 * @see {SpaceComplexity} O(1)
 */
const maxProduct = function maxProduct(nums) {
    const first = nums[0];
    let max = first;
    let lastMax = first;
    let lastMin = first;

    for (let i = 1; i < nums.length; i += 1) {
        const num = nums[i];

        const helperMax = lastMax;
        const helperMin = lastMin;

        lastMax = Math.max(num, num * helperMax, num * helperMin);
        lastMin = Math.min(num, num * helperMax, num * helperMin);

        max = Math.max(max, lastMax, lastMin);
    }

    return max;
};

export default maxProduct;
