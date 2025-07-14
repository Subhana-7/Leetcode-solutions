/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = (head, res = head.val) => {
    while (head.next) {
        res = (res << 1) | head.next.val;
        head = head.next;
    }
    return res;
};