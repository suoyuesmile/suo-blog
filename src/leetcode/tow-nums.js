var twoSumBase = function(nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// 使用map空间换时间
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

// 1 2
// 1 3
// 2 3
