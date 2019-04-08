/**
 * @param {number[]} height
 * @return {number}
 * @see {url} https://leetcode.com/problems/container-with-most-water/discuss/6100/Simple-and-clear-proofexplanation
 */
const maxArea = function maxArea(heights) {
    let area = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        const base = right - left;
        area = Math.max(area, base * Math.min(heights[left], heights[right]));

        // keep the bigger one
        if (heights[left] <= heights[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return area;
};

export default maxArea;
