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

    let fast = head;
    for (let i = 0; i < n; i += 1) {
        fast = fast.next;
    }

    if (!fast) return head.next;

    let slow = head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
};

export default removeNthFromEnd;
