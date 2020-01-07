var arr = [1, 3, 5, 6]

var target = 5

function binSearch(target, arr) {
  // 1.定界
  var hi = arr.length - 1,
    lo = 0

  // 2.迭代，换界
  while (hi - lo >= 1) {
    var mi = Math.floor((hi + lo) / 2)
    if (target < arr[mi]) {
      hi = mi
    } else if (arr[mi] < target) {
      lo = mi
    } else {
      return mi
    }
  }
}

console.log(binSearch(target, arr))
