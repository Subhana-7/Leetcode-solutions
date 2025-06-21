/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const res = [];
    const dfs = ((root, res) => {
        if (root == undefined) return
        dfs(root.left, res);
        res.push(root.val);
        dfs(root.right, res)
    })
    dfs(root1, res);
    dfs(root2, res);
    res.sort((a, b) => {
        return a - b;
    })
    return res;
};