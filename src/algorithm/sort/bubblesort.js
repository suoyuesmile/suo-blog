/**
 * 冒泡排序
 * bubblesort
 * @param {Array} Array
 * @return {Array}
 */

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      var temp
      if (arr[j + 1] > arr[j]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// 为什么 j 到 arr.length 就可以了

// 因为 i 到 arr.length 已经复位了

// 复杂度 O(n2) 不稳定排序
