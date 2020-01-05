/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (35.67%)
 * Likes:    820
 * Dislikes: 0
 * Total Accepted:    167.6K
 * Total Submissions: 469.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var result = strs[0]
  var i = 0
  while (i < strs.length) {
    result = commonStr(result, strs[i])
    i++
  }
  return result || ''
}
/**
 * @param {String} str
 * @param {String} str
 * @return {String}
 */
var commonStr = function(str1, str2) {
  let result = ''
  let len = str1.length > str2.length ? str2.length : str1.length
  for (let index = 0; index < len; index++) {
    if (str1[index] === str2[index]) {
      result = result + str1[index]
    } else {
      return result
    }
  }
  return result
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
// @lc code=end
