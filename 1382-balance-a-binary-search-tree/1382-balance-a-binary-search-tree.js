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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    let arr = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }

    function build(left, right) {
        if (left > right) return null;

        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(arr[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    }

    inorder(root);
    return build(0, arr.length - 1);
};