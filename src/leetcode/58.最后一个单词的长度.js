/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (31.95%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    60.5K
 * Total Submissions: 189K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 *
 * 如果不存在最后一个单词，请返回 0 。
 *
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 *
 * 示例:
 *
 * 输入: "Hello World"
 * 输出: 5
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var trimRight = function(s) {
//   var i = s.length
//   while (--i && s[i] === ' ') {
//     s = s.slice(0, i)
//   }
//   return s
// }
// var lengthOfLastWord = function(s) {
//   var i = s.length
//   if (!i) return 0
//   s = trimRight(s)
//   while (--i >= 0) {
//     if (s[i] === ' ') {
//       return s.length - 1 - i
//     }
//   }
//   return s.length
// }
var lengthOfLastWord = function(s) {
  s = s.trim()
  return s.length - 1 - s.lastIndexOf(' ')
}

// @lc code=end
