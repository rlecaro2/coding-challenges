const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const isLand = value => value === '1';

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const numIslands = matrix => {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    let count = 0;
    const visited = matrix.map(arr => new Array(arr.length));

    const bfsQueue = [];
    bfsQueue.push([0, 0]);
    const dfsStack = [];

    for (let a = 0; a < matrix.length; a += 1) {
        for (let b = 0; b < matrix[a].length; b += 1) {
            if (visited[a][b]) {
                continue;
            }
            // current position is land - DFS it
            if (isLand(matrix[a][b]) && !visited[a][b]) {
                dfsStack.push([a, b]);
                while (dfsStack.length > 0) {
                    const [i, j] = dfsStack.pop();
                    visited[i][j] = 1;
                    directions.forEach(([m, n]) => {
                        const newPos = [i + m, j + n];
                        const [n1, n2] = newPos;
                        if (
                            n1 < 0 ||
                            n2 < 0 ||
                            n1 >= visited.length ||
                            n2 >= visited[a].length ||
                            visited[n1][n2]
                        ) {
                            return;
                        }

                        if (isLand(matrix[n1][n2])) {
                            dfsStack.push(newPos);
                        }
                    });
                }
                count += 1; // We finished visiting an island
            }
            visited[a][b] = 1;
        }
    }

    return count;
};

export default numIslands;
