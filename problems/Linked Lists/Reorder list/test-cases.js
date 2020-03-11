export default [
    {
        input: {
            val: 1,
            next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } },
        },
        output: {
            val: 1,
            next: { val: 5, next: { val: 2, next: { val: 4, next: { val: 3, next: null } } } },
        },
    },
    {
        input: null,
        output: null,
    },
    {
        input: { val: 1, next: null },
        output: { val: 1, next: null },
    },
];
