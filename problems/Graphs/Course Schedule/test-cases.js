export default [
    {
        input: [2, [[1, 0]]],
        output: true,
    },
    {
        input: [2, [[1, 0], [0, 1]]],
        output: false,
    },
    {
        input: [3, [[1, 0], [1, 2], [0, 1]]],
        output: false,
    },
    {
        input: [3, [[0, 1], [0, 2], [1, 2]]],
        output: true,
    },
];
