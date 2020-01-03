// callback function
function A() {
  console.log('I am callback')
}

function B(callback) {
  console.log('I am B, I do something!')
  callback()
}

B(A)

function C(callback) {
  console.log('I am B, I do something!')
  callback()
}

C(function () {
  console.log('I am callback!')
})