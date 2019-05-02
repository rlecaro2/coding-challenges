/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = arr => {
    if (arr.length === 1) return true;

    // DFS:
    const moves = [0];
    let i = 0;
    while (arr[i] > 0 || moves.length > 0) {
        if (i + 1 >= arr.length) {
            return true;
        }

        const move = moves.pop();
        i += move;
        if (arr[i] > 0) {
            for (let j = 1; j <= arr[i]; j += 1) {
                moves.push(-1 * j);
                moves.push(j);
            }
            arr[i] = 0;
        }
    }

    return false;
};

export default canJump;
