/**
 * 防抖-任务频繁触发下，只有当任务触发超过指定间隔，任务再次才会触发
 */
function debounce(fn, intervalTime) {
  let timer
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      fn.call(this, arguments)
    }, intervalTime)
  }
}

function task() {
  console.log('ok')
}

debounce(task, 1000)
