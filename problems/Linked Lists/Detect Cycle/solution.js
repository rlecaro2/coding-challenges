/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
    if (!head) {
        return false;
    }

    let current = head;
    let faster = head.next;
    while (current && faster) {
        if (current === faster) {
            return true;
        }

        current = current.next;
        faster = faster.next ? faster.next.next : faster.next;
    }

    return false;
};

export default hasCycle;
