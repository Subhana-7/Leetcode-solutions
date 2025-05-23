/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let arr = []
    function traverse(node) {
        if (!node) return;
        arr.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return arr;
};