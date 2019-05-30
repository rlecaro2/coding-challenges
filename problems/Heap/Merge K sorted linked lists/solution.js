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
            this.heap[n] !== undefined &&
            this.heap[parent] !== undefined &&
            this.heap[n] > this.heap[parent]
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
        if (element === undefined) {
            return null;
        }

        if (this.heap.length === 1) {
            this.heap = [];
        }

        this.heap[0] = this.heap.pop();
        this.adjust(0);
        return element;
    }

    adjust(n) {
        const firstChildIndex = this.getFirstChildIndex(n);
        if (this.heap[firstChildIndex] === undefined) return;

        const parent = this.heap[n];
        const child1 = this.heap[firstChildIndex];
        const child2 = this.heap[firstChildIndex + 1];

        if (parent !== undefined && (parent < child1 || parent < child2)) {
            let largestChildIndex;
            if (child1 !== undefined && child2 !== undefined) {
                largestChildIndex = child1 > child2 ? firstChildIndex : firstChildIndex + 1;
            } else {
                largestChildIndex = child1 !== undefined ? firstChildIndex : firstChildIndex + 1;
            }

            const buffer = this.heap[n];
            this.heap[n] = this.heap[largestChildIndex];
            this.heap[largestChildIndex] = buffer;
            this.adjust(largestChildIndex);
        }
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
    const heap = new Heap();
    for (let i = 0; i < lists.length; i += 1) {
        let node = lists[i];
        while (node && node.val !== undefined) {
            heap.add(node.val);
            node = node.next;
        }
    }

    let currentNode = { val: null, next: null };
    let max = heap.remove();

    while (max !== null) {
        currentNode.val = max;
        max = heap.remove();
        if (max !== null) {
            const newNode = {};
            newNode.next = currentNode;
            currentNode = newNode;
        }
    }

    return currentNode.val === null ? null : currentNode;
};

export default mergeKLists;
