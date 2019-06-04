/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    for (let i = 0; i < intervals.length; i += 1) {
        const [start, end] = intervals[i];
        const prev = result[result.length - 1];

        if (prev && start <= prev[1]) {
            prev[1] = Math.max(prev[1], end);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};

export default merge;
