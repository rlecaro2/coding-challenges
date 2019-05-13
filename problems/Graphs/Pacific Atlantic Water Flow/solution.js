const cloneMatrix = (rows, columns) => {
    const mat = new Array(rows);
    for (let i = 0; i < rows; i += 1) {
        mat[i] = new Array(columns).fill(0);
    }
    return mat;
};

// This has side effects to save memory
const paintArray = (arr, arrPos, border) => {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] = 1;
        border.push([arrPos, i]);
    }
};

const paintIndexInMatrix = (matrix, j, border) => {
    for (let i = 0; i < matrix.length; i += 1) {
        matrix[i][j] = 1;
        border.push([i, j]);
    }
};

const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const bfs = (matrix, visited, toVisit) => {
    while (toVisit.length > 0) {
        const [i, j] = toVisit.pop();

        for (let k = 0; k < directions.length; k += 1) {
            const [d1, d2] = directions[k];
            const x = i + d1;
            const y = j + d2;

            if (
                x < 0 ||
                x >= matrix.length ||
                y < 0 ||
                y >= matrix[0].length ||
                visited[x][y] ||
                matrix[x][y] < matrix[i][j]
            ) {
                continue;
            }
            visited[x][y] = 1;
            toVisit.push([x, y]);
        }
    }
};

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = matrix => {
    if (matrix.length === 0) return [];

    const rows = matrix.length;
    const columns = matrix[0].length;
    const pacific = cloneMatrix(rows, columns);
    const atlantic = cloneMatrix(rows, columns);

    const pacificBorder = [];
    paintArray(pacific[0], 0, pacificBorder);
    paintIndexInMatrix(pacific, 0, pacificBorder);

    const atlanticBorder = [];
    paintArray(atlantic[atlantic.length - 1], atlantic.length - 1, atlanticBorder);
    paintIndexInMatrix(atlantic, atlantic[0].length - 1, atlanticBorder);

    bfs(matrix, pacific, pacificBorder);
    bfs(matrix, atlantic, atlanticBorder);

    // Find results
    const results = [];
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length; j += 1) {
            if (pacific[i][j] && atlantic[i][j]) {
                results.push([i, j]);
            }
        }
    }

    return results;
};

export default pacificAtlantic;
