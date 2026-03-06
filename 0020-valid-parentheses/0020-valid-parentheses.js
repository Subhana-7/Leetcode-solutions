/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = { ")": "(", "}": "{", "]": "[" };
    let stack = [];

    for (let ch of s) {
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch)
        } else if (!stack.length || stack.pop() !== map[ch]) {
            return false;
        }
    }
    return stack.length === 0;
};