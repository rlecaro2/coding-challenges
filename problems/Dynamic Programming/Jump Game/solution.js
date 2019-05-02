/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = arr => {
    if (arr.length === 1) return true;
    let last = arr.length - 1;
    for (let i = arr.length - 2; i >= 0; i -= 1) {
        if (i + arr[i] >= last) {
            last = i;
        }
    }

    return last === 0;
};

export default canJump;
