function getParentIndex(n) {
    return Math.ceil(n / 2) - 1;
}

function getFirstChildIndex(n) {
    return 2 * n + 1;
}

class Heap {
    constructor({ isMax = false } = {}) {
        this.heap = [];
        this.max = isMax;
    }

    getLength() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    add(num) {
        if (this.heap.length === 0) {
            this.heap[0] = num;
            return;
        }

        let n = this.getLength();
        this.heap[n] = num;
        let parent = getParentIndex(n);

        // check upwards
        while (
            n > 0 && this.heap[parent] !== undefined && this.max
                ? this.heap[n] > this.heap[parent]
                : this.heap[n] < this.heap[parent]
        ) {
            const buffer = this.heap[n];
            this.heap[n] = this.heap[parent];
            this.heap[parent] = buffer;
            n = parent;
            parent = getParentIndex(n);
        }
    }

    remove() {
        if (this.getLength() === 1) {
            return this.heap.pop();
        }

        const element = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.adjust(0);
        return element;
    }

    adjust(n) {
        const firstChildIndex = getFirstChildIndex(n);
        if (this.heap[firstChildIndex] === undefined) return;

        const defaultChild = this.max ? -Infinity : +Infinity;

        const parent = this.heap[n];
        const child1 = this.heap[firstChildIndex] || defaultChild;
        const child2 = this.heap[firstChildIndex + 1] || defaultChild;

        const wrongChildPresence = this.max
            ? parent < child1 || parent < child2
            : parent > child1 || parent > child2;

        if (parent !== undefined && wrongChildPresence) {
            let wrongChildIndex;
            if (this.max) {
                wrongChildIndex = child1 > child2 ? firstChildIndex : firstChildIndex + 1;
            } else {
                wrongChildIndex = child1 < child2 ? firstChildIndex : firstChildIndex + 1;
            }

            const buffer = this.heap[n];
            this.heap[n] = this.heap[wrongChildIndex];
            this.heap[wrongChildIndex] = buffer;
            this.adjust(wrongChildIndex);
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
export default class MedianFinder {
    constructor() {
        this.left = new Heap({ isMax: true });
        this.right = new Heap();
    }

    /**
     * Keep both sides equal (or with 1 difference) in length
     */
    balanceSides() {
        while (
            this.left.getLength() > this.right.getLength() + 1 ||
            this.left.getLength() + 1 < this.right.getLength()
        ) {
            if (this.left.getLength() > this.right.getLength()) {
                const moving = this.left.remove();
                this.right.add(moving);
            } else if (this.left.getLength() < this.right.getLength()) {
                const moving = this.right.remove();
                this.left.add(moving);
            }
        }
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.left.peek() || num <= this.left.peek()) {
            this.left.add(num);
        } else if (!this.right.peek() || num >= this.right.peek()) {
            this.right.add(num);
        } else {
            this.left.add(num);
        }

        this.balanceSides();
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.left.getLength() > this.right.getLength()) {
            return this.left.peek();
        }

        if (this.left.getLength() < this.right.getLength()) {
            return this.right.peek();
        }

        return (this.left.peek() + this.right.peek()) / 2;
    }
}
