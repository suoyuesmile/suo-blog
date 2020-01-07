/**
 * insert el into array
 * @param {Array} arr
 * @param {Number} targetIndex
 * @param {Number} target
 * @return null
 */
function insert(arr, targetIndex, target) {
  var i = arr.length
  while (i-- > targetIndex) {
    arr[i + 1] = arr[i]
  }
  arr[targetIndex] = target
  return arr
}

console.log(insert([1, 2, 4, 5], 4, 3))
