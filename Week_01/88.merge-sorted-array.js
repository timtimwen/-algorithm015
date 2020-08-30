/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (48.48%)
 * Likes:    604
 * Dislikes: 0
 * Total Accepted:    199.3K
 * Total Submissions: 410.8K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // carete a new pointer that is equal to m + n
  // and then substract one form m and n
  let p = m-- + n--;
  // move the third pointer
  while (p--) {
    // nums1[p] = nums1[m] : nums1[m] > nums2[n], or nums2 elements are checked out
    // nums1[p] = nums2[n] : nums1[m] <= nums2[n]
    // move array pointer after assigning value
    nums1[p] = n < 0 || nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
// @lc code=end
