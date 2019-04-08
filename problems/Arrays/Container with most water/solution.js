/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function maxArea(heights) {
    let area = 0;
    for (let i = 0; i < heights.length - 1; i += 1) {
        const pillar1 = heights[i];
        for (let j = i + 1; j < heights.length; j += 1) {
            const pillar2 = heights[j];
            const base = j - i;
            const newArea = base * Math.min(pillar1, pillar2);
            area = Math.max(area, newArea);
        }
    }

    return area;
};

export default maxArea;
