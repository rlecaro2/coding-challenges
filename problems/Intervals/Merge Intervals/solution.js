/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    let j = 1;
    while (j < intervals.length) {
        const first = intervals[i];
        const second = intervals[j];

        const [s1, e1] = first;
        const [s2, e2] = second;

        if (s2 <= e1 || e1 >= e2) {
            const endest = Math.max(e1, e2);
            intervals[i] = [s1, endest]; // merged element

            intervals.splice(j, 1); // remove element at j
        } else {
            i += 1;
            j += 1;
        }
    }

    return intervals;
};

export default merge;
