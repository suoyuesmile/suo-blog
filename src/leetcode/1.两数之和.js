/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    map.set(nums[i], i)
  }

  for (let i = 0; i < len; i++) {
    const j = map.get(target - nums[i])
    if (map.has(target - nums[i])) {
      if (2 * nums[i] === target && i === j) continue
      return [i, j]
    }
  }
}
// @lc code=end
