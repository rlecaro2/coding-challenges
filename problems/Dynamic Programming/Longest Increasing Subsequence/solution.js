/**
 * @param {number} n
 * @return {number}
 */
const lengthOfLIS = function lengthOfLIS(nums) {
    const solutions = [];
    let maxLength = 0;

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];

        solutions[i] = {
            min: num,
            max: num,
            len: 1,
        };

        for (let j = 0; j < i; j += 1) {
            const another = solutions[j];
            if (another.min < num && another.max < num && another.len >= solutions[i].len) {
                solutions[i] = {
                    min: another.min,
                    max: num,
                    len: another.len + 1,
                };
            }
        }
        // console.log(`Solution for ${num} is ${JSON.stringify(solutions[i], null, 2)}`);
        maxLength = Math.max(maxLength, solutions[i].len);
    }

    return maxLength;
};

export default lengthOfLIS;
