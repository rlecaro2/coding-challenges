/**
 * You are a professional robber planning to rob houses along a street. Each house
 * has a certain amount of money stashed, the only constraint stopping you from robbing
 * each of them is that adjacent houses have security system connected and it will
 * automatically contact the police if two adjacent houses were broken into on the same
 * night.
 *
 * Given a list of non-negative integers representing the amount of money of each house,
 * determine the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    const solutions = [];

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        solutions[i] = num;

        // check last 2 possible options
        for (let j = i - 3; j <= i - 2; j += 1) {
            const solution = solutions[j];
            if (solution && solution + num > solutions[i]) {
                solutions[i] = solution + num;
            }
        }
    }

    const values = solutions.slice(-2);
    return Math.max(...values, 0);
};

export default rob;
