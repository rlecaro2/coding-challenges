const decodeWays = arr => {
    if (arr.length === 0) {
        return 0;
    }

    const solutions = [];
    solutions[arr.length] = 1;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] === '0') {
            solutions[i] = 0;
        } else {
            solutions[i] = solutions[i + 1];
            const lessThan20 = arr[i] === '1' && arr[i + 1] <= '9';
            const lessThan26 = arr[i] === '2' && arr[i + 1] < '7';
            if (lessThan20 || lessThan26) {
                const twoPrev = solutions[i + 2] !== undefined ? solutions[i + 2] : 1;
                solutions[i] += twoPrev;
            }
        }
    }

    return solutions[0];
};

/**
 * A message containing letters from A-Z is being canBeDecodedd to numbers using the
 * following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given a non-empty string containing only digits, determine the total number of ways
 * to decode it.
 * @param {string} s
 * @return {number}
 */
const numDecodings = s => {
    const arr = s.split('');
    const total = decodeWays(arr);
    return total;
};

export default numDecodings;
