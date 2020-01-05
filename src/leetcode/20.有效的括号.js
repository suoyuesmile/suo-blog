/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.37%)
 * Likes:    1293
 * Dislikes: 0
 * Total Accepted:    178.1K
 * Total Submissions: 441K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isMatch = function(left, right) {
  return (
    (left === '{' && right === '}') ||
    (left === '(' && right === ')') ||
    (left === '[' && right === ']')
  )
}
var isValid = function(s) {
  var stack = []
  var i = -1
  var left = '{[('
  while (++i < s.length) {
    if (left.indexOf(s[i]) !== -1) {
      stack.push(s[i])
    } else {
      if (stack.length > 0 && isMatch(stack[stack.length - 1], s[i])) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length ? false : true
}
// @lc code=end
