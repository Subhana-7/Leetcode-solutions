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
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let count = 0;

    function helper(root) {
        if (root === null) {
            return [0, 0];
        }

        let left = helper(root.left);
        let right = helper(root.right);

        let sum = left[0] + right[0] + root.val;
        let nodeCount = left[1] + right[1] + 1;
        let avg = Math.floor(sum / nodeCount);

        if (avg === root.val) {
            count++;
        }

        return [sum, nodeCount];
    }

    helper(root);
    return count;
};