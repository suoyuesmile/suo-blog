/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = Math.pow(2, 31) - 1
  var min = -Math.pow(2, 31)
  var temp = x > 0 ? x : -1 * x
  var stack = []
  var result = 0
  while (temp > 0) {
    stack.push(Math.floor(temp % 10))
    temp = Math.floor(temp / 10)
  }
  temp = 1
  var i = stack.length
  while (i-- > 0) {
    result = result + stack[i] * temp
    temp = temp * 10
  }
  if (x > 0) {
    return result <= max ? result : 0
  } else {
    return -result >= min ? -result : 0
  }
}
