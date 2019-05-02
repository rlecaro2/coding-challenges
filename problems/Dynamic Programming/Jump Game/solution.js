/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = arr => {
    if (arr.length === 1) return true;

    const canJumps = [true];
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j <= arr[i]; j += 1) {
            if (canJumps[i]) {
                canJumps[i + j] = true;
            } else {
                canJumps[i] = false;
            }
        }
    }

    return canJumps[arr.length - 1];
};

export default canJump;
