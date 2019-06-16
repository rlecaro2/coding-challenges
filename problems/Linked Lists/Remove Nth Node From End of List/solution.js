/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    if (!head || !n) return null;

    const queue = new Array(n + 1);
    let current = head;
    let length = 0;

    while (current) {
        queue.push(current);
        queue.shift();
        current = current.next;
        length += 1;
    }

    if (length <= n) return head.next;

    const [before, , newNext] = queue;
    before.next = newNext;
    return head;
};

export default removeNthFromEnd;
