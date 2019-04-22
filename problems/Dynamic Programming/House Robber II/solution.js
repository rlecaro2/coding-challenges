const previousRob = nums => {
    const solutions = [0, 0, 0];

    for (let i = 0; i < nums.length; i += 1) {
        let newSol = 0;

        // check last 2 possible options
        if (i >= 2) {
            const prev = solutions[0] > solutions[1] ? solutions[0] : solutions[1];
            newSol = nums[i] + prev;
        } else {
            newSol = nums[i];
        }

        solutions.push(newSol);
        solutions.shift();
    }

    return Math.max(...solutions, 0);
};

/**
 * You are a professional robber planning to rob houses along a street. Each house has
 * a certain amount of money stashed. All houses at this place are arranged in a
 * circle. That means the first house is the neighbor of the last one. Meanwhile,
 * adjacent houses have security system connected and it will automatically contact the
 * police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house,
 * determine the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    if (nums.length < 3) {
        return Math.max(...nums, 0);
    }

    const withFirst = previousRob(nums.slice(0, nums.length - 1));
    const withLast = previousRob(nums.slice(1));
    return Math.max(withFirst, withLast);
};

export default rob;
