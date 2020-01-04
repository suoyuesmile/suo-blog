/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var str = String(x)
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  )
}
// @lc code=end
