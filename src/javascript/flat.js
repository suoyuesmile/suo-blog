// Array.prototype.flat

const origin = [1, [2, 3], [4, [5, 6], [7, 8, 9]]]

console.log(origin.flat(10))

function flat(origin) {
  let target = []
  origin.forEach(item => {
    target = Array.isArray(item)
      ? target.concat(...arguments.callee(item))
      : target.concat(item)
  })
  return target
}
console.log(flat(origin))

function reduce_flat(origin) {
  return origin.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? reduce_flat(cur) : cur)
  }, [])
}

console.log(reduce_flat(origin))
