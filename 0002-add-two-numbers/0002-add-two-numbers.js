/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let digits1 = '', digits2 = '';
    while (l1) {
        digits1 += l1.val;
        l1 = l1.next;
    }
    while (l2) {
        digits2 += l2.val;
        l2 = l2.next;
    }
    digits1 = digits1.split("").reverse().join("");
    digits2 = digits2.split("").reverse().join("");
    let sum = Number(digits1) + Number(digits2);
    sum = sum.toString().split("").map(Number);

    let dummy = new ListNode(0)
    let curr = dummy;

    for (let i = sum.length - 1; i >= 0; i--) {
        curr.next = new ListNode(sum[i]);
        curr = curr.next
    }
    return dummy.next;
};
