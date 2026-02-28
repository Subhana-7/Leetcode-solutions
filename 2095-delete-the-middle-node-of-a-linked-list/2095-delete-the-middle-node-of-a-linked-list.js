/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    if (!head || !head.next) return null;
    let n = size(head);
    let mid = Math.floor(n / 2);
    let curr = head;
    for (let i = 0; i < mid - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
};

function size(head) {
    let count = 0;
    let curr = head;
    while (curr) {
        count++;
        curr = curr.next
    }
    return count;
}