/**
 * 任务在某一特定的时间内，不会被调用两次
 */
function throttle(fn, wait) {
  let runable = false
  setTimeout(() => {
    fn.call(this, arguments)
    runable = true
  }, wait)
}

/**
 * 使用时间轴存值
 */

function throttle(fn, wait) {
  let last = 0
  return function() {
    setTimeout(() => {
      let start = +new Date()
      if (start - last > wait) {
        fn.apply(this, arguments)
        last = start
      }
    }, wait)
  }
}
