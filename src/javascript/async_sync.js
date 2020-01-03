setTimeout(() => {
  console.log(1)
}, 1000)

var a = new Promise(() => {
  console.log(2)
  b = new Promise(() => {
    console.log(3)
  })
})

setTimeout(() => {
  console.log(4)
})

// 2 3 4 1
