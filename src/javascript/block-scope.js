// 块级作用域
for (var index = 0; index < 10; index++) {
  console.log(index)
}
console.log(index)
// 会影响函数作用域和全局作用域

// with
// try/catch

try {
  undefined()
} catch (err) {
  // console.log(1, err)
}

// console.log(err)

// let 改变现状 增强了块级作用域，不会被变量提升
