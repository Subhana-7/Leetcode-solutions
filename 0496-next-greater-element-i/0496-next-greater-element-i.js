/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const map = {};
  for (let i = 0; i < nums2.length; ++i) {
    let greater = -1;
    for (let j = i + 1; j < nums2.length; ++j) {
      if (nums2[j] > nums2[i]) {
        greater = nums2[j];
        break;
      }
    }
    map[nums2[i]] = greater;
  }
  return nums1.map(num => map[num]);
};