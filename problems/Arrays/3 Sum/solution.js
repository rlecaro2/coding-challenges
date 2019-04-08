/**
 * My solution was too slow :(
 * @param {number[]} nums
 * @return {number[][]}
 * @see {url} https://leetcode.com/problems/3sum/discuss/232712/Best-Python-Solution-(Explained)
 */
const threeSum = function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i += 1) {
        const element = nums[i];
        if (element > 0) {
            break;
        } // we're sorted and already reviewed these nums
        if (element === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const total = element + nums[left] + nums[right];

            if (total < 0) {
                left += 1;
            } else if (total > 0) {
                right -= 1;
            } else {
                result.push([element, nums[left], nums[right]]);

                // avoid dups
                while (left < right && nums[left] === nums[left + 1]) {
                    left += 1;
                }

                // avoid dups
                while (left < right && nums[right] === nums[right - 1]) {
                    right -= 1;
                }

                left += 1;
                right -= 1;
            }
        }
    }

    return result;
};

export default threeSum;
