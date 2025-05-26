/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);
  let result = '';
  for (const [char, count] of sorted) {
    result += char.repeat(count);
  }

  return result;
};