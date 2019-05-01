const memo = {};

const canBeDecoded = arr => {
    if (arr[0] === '0') {
        return false;
    }

    const num = parseInt(arr.join(''), 10);
    if (num >= 1 && num <= 26) {
        return true;
    }

    return false;
};

const decodeWays = arr => {
    if (memo[arr]) {
        return memo[arr];
    }

    let total = 0;
    if (canBeDecoded(arr)) {
        total += 1;
    }

    for (let i = 1; i <= 2; i += 1) {
        if (canBeDecoded(arr.slice(0, i))) {
            const otherWays = decodeWays(arr.slice(i));
            total += otherWays;
        }
    }

    memo[arr] = total;
    return total;
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
