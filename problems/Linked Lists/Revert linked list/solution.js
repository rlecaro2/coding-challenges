/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    let current = head;
    let previous = null;
    while (current) {
        const buffer = current.next;
        current.next = previous;
        previous = current;
        current = buffer;
    }

    return previous;
};

export default reverseList;
