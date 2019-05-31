// Input: [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

const input1 = [
    {
        val: 1,
        next: {
            val: 4,
            next: {
                val: 5,
                next: null,
            },
        },
    },
    {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    },
    {
        val: 2,
        next: {
            val: 6,
            next: null,
        },
    },
];

const output1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: {
                                val: 6,
                                next: null,
                            },
                        },
                    },
                },
            },
        },
    },
};

export default [
    {
        input: input1,
        output: output1,
    },
    {
        input: [{ val: 0, next: { val: 2, next: { val: 5, next: null } } }],
        output: { val: 0, next: { val: 2, next: { val: 5, next: null } } },
    },
    {
        input: [
            {},
            { val: -2, next: null },
            { val: -3, next: { val: -2, next: { val: 1, next: null } } },
        ],
        output: { val: -3, next: { val: -2, next: { val: -2, next: { val: 1, next: null } } } },
    },
];
