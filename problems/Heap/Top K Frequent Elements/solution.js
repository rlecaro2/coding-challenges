class Heap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(n) {
        return Math.ceil(n / 2) - 1;
    }
    getFirstChildIndex(n) {
        return 2 * n + 1;
    }

    add(element) {
        let n = this.heap.length;
        this.heap[n] = element;
        let parent = this.getParentIndex(n);
        while (
            n > 0 &&
            this.heap[n] &&
            this.heap[parent] &&
            this.heap[n].count > this.heap[parent].count
        ) {
            const buffer = this.heap[n];
            this.heap[n] = this.heap[parent];
            this.heap[parent] = buffer;
            n = parent;
            parent = this.getParentIndex(n);
        }
    }

    remove() {
        const element = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.adjust(0);
        return element;
    }

    adjust(n) {
        const firstChildIndex = this.getFirstChildIndex(n);
        if (!this.heap[firstChildIndex]) return;

        const parent = this.heap[n];
        const child1 = this.heap[firstChildIndex];
        const child2 = this.heap[firstChildIndex + 1];

        if (
            parent &&
            child1 &&
            child2 &&
            (parent.count < child1.count || parent.count < child2.count)
        ) {
            const largestChildIndex =
                child1.count > child2.count ? firstChildIndex : firstChildIndex + 1;

            const buffer = this.heap[n];
            this.heap[n] = this.heap[largestChildIndex];
            this.heap[largestChildIndex] = buffer;
            this.adjust(largestChildIndex);
        }
    }
}

/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function topKFrequent(nums, k) {
    const amount = {};
    const ranking = new Heap();

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        let count = 1;
        if (amount[num] === undefined) {
            amount[num] = 1;
        } else {
            amount[num] += 1;
            count = amount[num];
        }

        ranking.add({ num, count });
    }

    const results = {};
    for (let i = 1; i <= k; i += 1) {
        let removed = ranking.remove();
        while (results[removed.num]) {
            removed = ranking.remove();
        }
        results[removed.num] = true;
    }

    return Object.keys(results).map(x => parseInt(x, 10));
};

export default topKFrequent;
