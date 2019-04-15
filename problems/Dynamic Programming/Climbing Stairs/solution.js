const steps = {
    1: 1,
    2: 2,
};

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function climbStairs(n) {
    if (steps[n]) {
        return steps[n];
    }

    steps[n] = 0;
    steps[n] += climbStairs(n - 1, steps);
    steps[n] += climbStairs(n - 2, steps);

    return steps[n];
};

export default climbStairs;
