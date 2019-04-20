let dict = {};
let results = {};

const recursiveHelper = (str, words) => {
    if (results[str] !== undefined) {
        return results[str];
    }

    if (dict[str]) {
        results[str] = true;
        return true;
    }

    const localResults = [];
    for (let i = 0; i < words.length; i += 1) {
        const word = words[i];
        const index = str.indexOf(word);
        if (index !== -1) {
            const left = str.slice(0, index);
            const right = str.slice(index + word.length);
            const checkLeft = left.length > 0 ? recursiveHelper(left, words) : true;
            const checkRight = right.length > 0 ? recursiveHelper(right, words) : true;
            localResults.push(checkLeft && checkRight);
        }
    }

    // do an OR
    for (let j = 0; j < localResults.length; j += 1) {
        if (localResults[j]) {
            results[str] = true;
            return true;
        }
    }

    results[str] = false;
    return false;
};

/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * @param {string} str
 * @param {string[]} words
 * @return {boolean}
 */
const wordBreak = (str, words) => {
    dict = {};
    results = {};
    words.sort((a, b) => b.length - a.length);
    words.forEach(word => {
        dict[word] = true;
    });

    return recursiveHelper(str, words);
};

export default wordBreak;
