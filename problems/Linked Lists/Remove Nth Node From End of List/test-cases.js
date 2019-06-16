export default [
    {
        input: [
            {
                val: 1,
                next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } },
            },
            2,
        ],
        output: {
            val: 1,
            next: { val: 2, next: { val: 3, next: { val: 5, next: null } } },
        },
    },
    {
        input: [null, 1],
        output: null,
    },
    {
        input: [{ val: 1, next: null }, 1],
        output: null,
    },
];
