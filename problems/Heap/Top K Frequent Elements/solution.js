/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function topKFrequent(nums, k) {
    const amount = {};
    const ranking = [{}, {}];

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (amount[num] === undefined) {
            amount[num] = 1;
            ranking[amount[num]][num] = true;
        } else {
            delete ranking[amount[num]][num];
            amount[num] += 1;
            if (!ranking[amount[num]]) {
                ranking[amount[num]] = {};
            }
            ranking[amount[num]][num] = true;
        }
    }

    const results = [];
    for (let i = ranking.length - 1; i >= 0; i -= 1) {
        const ranked = ranking[i];
        const elements = Object.keys(ranked);
        for (let j = 0; j < elements.length; j += 1) {
            const key = parseInt(elements[j], 10); // parsing only for me
            results.push(key);
            if (results.length >= k) {
                return results;
            }
        }
    }

    return results;
};

export default topKFrequent;
