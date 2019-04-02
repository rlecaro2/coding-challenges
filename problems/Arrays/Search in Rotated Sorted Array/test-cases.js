export default [
    {
        inputs: [[1], 1],
        output: 0,
    },
    {
        inputs: [[1, 3], 1],
        output: 0,
    },
    {
        inputs: [[4, 5, 6, 7, 0, 1, 2], 0],
        output: 4,
    },
    {
        inputs: [[4, 5, 6, 7, 0, 1, 2], 3],
        output: -1,
    },
];
