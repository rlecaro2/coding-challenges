let maxCount = 0;

const find = (unionFind, id) => {
    let element = unionFind[id];
    while (element.root !== element.val) {
        element = unionFind[element.root];
    }

    // compress
    let start = unionFind[id];
    while (start.val !== element.root) {
        const next = unionFind[start.root];
        start.root = element.root;
        start.count = element.count;
        start = next;
    }

    return element;
};

const unify = (unionFind, id1, id2) => {
    const root1 = find(unionFind, id1);
    const root2 = find(unionFind, id2);

    if (root1.root !== root2.val) {
        root1.root = root2.val;
        const total = root1.count + root2.count;
        root1.count = total;
        root2.count = total;

        maxCount = Math.max(maxCount, total);
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
    if (nums.length <= 1) {
        return nums.length;
    }

    const unionFind = {};
    maxCount = 1;
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];

        if (unionFind[num]) {
            continue;
        }

        unionFind[num] = {
            val: num,
            count: 1, // only for roots
            root: num,
        };

        if (unionFind[num - 1]) {
            unify(unionFind, num, num - 1);
        }

        if (unionFind[num + 1]) {
            unify(unionFind, num, num + 1);
        }
    }

    return maxCount;
};

export default longestConsecutive;
