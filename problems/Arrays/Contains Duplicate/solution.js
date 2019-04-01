/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function containsDuplicate(nums) {
    const dict = {};
    for (let i = 0; i < nums.length; i += 1) {
        const element = nums[i];
        if (dict[element]) {
            return true;
        }
        dict[element] = true;
    }
    return false;
};

export default containsDuplicate;
