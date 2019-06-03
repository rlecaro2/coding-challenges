/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let c1 = l1;
    let c2 = l2;
    let root = null;
    let result = {};

    while (c1 || c2) {
        if (!c1) {
            result.val = c2.val;
            result.next = c2.next;
            return root || result;
        }

        if (!c2) {
            result.val = c1.val;
            result.next = c1.next;
            return root || result;
        }

        const lower = c1.val < c2.val ? c1 : c2;
        if (!root) {
            root = {
                val: lower.val,
            };
            result = {};
            root.next = result;
        } else {
            result.val = lower.val;
            result.next = {};
            result = result.next;
        }

        if (lower === c1) {
            c1 = c1.next;
        } else {
            c2 = c2.next;
        }
    }

    return root;
};

export default mergeTwoLists;
