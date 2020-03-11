function countOnes(matrix) {
    return matrix.reduce((sum, row) => {
        return (
            sum +
            row.reduce((ones, value) => {
                return ones + value;
            }, 0)
        );
    }, 0);
}

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function slowCountSquares(matrix) {
    const h = matrix.length;
    const w = matrix[0].length;

    // initially count single digits
    let squares = countOnes(matrix);

    let squareSize = 2;
    for (squareSize; squareSize <= h || squareSize <= w; squareSize += 1) {
        const prevSquareSize = squareSize - 1;

        for (let row = 0; row <= h - squareSize; row += 1) {
            for (let col = 0; col <= w - squareSize; col += 1) {
                if (
                    matrix[row][col] === prevSquareSize &&
                    matrix[row + 1][col] >= prevSquareSize &&
                    matrix[row][col + 1] >= prevSquareSize &&
                    matrix[row + 1][col + 1] >= prevSquareSize
                ) {
                    squares += 1;
                    matrix[row][col] += 1;
                }
            }
        }
    }

    return squares;
}

export default slowCountSquares;
