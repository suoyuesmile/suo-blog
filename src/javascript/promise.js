const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function Promise() {
  let that = this
  that.status = PENDING
  this.value = undefined
  this.rejectedReason = undefined
  that.fulfilledCallbackInfo = undefined
  that.rejectedCallbackInfo = undefined
  that.onFulfillCallbacks = []
  that.onRejectedCallbacks = []

  function resolve(value) {
    if (val instanceof Promise) {
      return val.then(resolve, reject)
    }

    setTimeout(() => {
      if (that.status === PENDING) {
        that.status = FULFILLED
        that.value = value
        this.onFulfillCallbacks.forEach(cb => cb(that.value))
      }
    })
  }

  function rejected(val) {
    setTimeout(() => {
      if (that.status === PENDING) {
        that.status = REJECTED
        that.rejectedReason = value
        that.onRejectedCallbacks.forEach(cb => cb(that.rejectedReason))
      }
    })
  }
}

function resolvePromise() {}
Promise.prototype.then = function(onResolve, onRejected) {}
Promise.all = function() {}
Promise.race = function() {}
Promise.resolve = function() {}
Promise.reject = function() {}
Promise.catch = function() {}
