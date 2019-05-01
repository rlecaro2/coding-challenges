/**
 * A robot is located at the top-left corner of a m x n grid
 * The robot can only move either down or right at any point in time. The robot is trying to reach
 * the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    let solutions = new Array(m).fill(0);
    solutions = solutions.map(() => new Array(n).fill(0));
    solutions[0][0] = 1;

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (i > 0) {
                const left = solutions[i - 1][j];
                solutions[i][j] += left;
            }

            if (j > 0) {
                const top = solutions[i][j - 1];
                solutions[i][j] += top;
            }
        }
    }

    return solutions[m - 1][n - 1];
};

export default uniquePaths;
