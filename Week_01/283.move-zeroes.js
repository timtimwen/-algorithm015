/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (62.10%)
 * Likes:    712
 * Dislikes: 0
 * Total Accepted:    199.9K
 * Total Submissions: 321.6K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // moved pointer: don't move if met zero
  let indexPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // exchanges if nums' array index is front of moved pointer
      if (i > indexPos) {
        nums[indexPos] = nums[i];
        nums[i] = 0;
      }
      indexPos++;
    }
  }
};
// @lc code=end
