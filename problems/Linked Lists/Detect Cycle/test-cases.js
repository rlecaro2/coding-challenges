const cycledList = {
    val: 1,
    next: {
        val: 2,
    },
};

cycledList.next.next = cycledList;

export default [
    {
        input: cycledList,
        output: true,
    },
    {
        input: null,
        output: false,
    },
    {
        input: { val: 1, next: { val: 2, next: { val: 3, next: null } } },
        output: false,
    },
];
