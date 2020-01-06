// 理解变量函数提升
// var a = 1
var a = 2

console.log(a)
a()

function a() {
  console.log(100)
}

// ====>
function a() {}
var a
a = 2

console.log(a)
a()

// 优先级函数声明提升高于变量声明提升，不会被变量声明提升覆盖，但是会被变量赋值覆盖
// 只有函数声明才会提升，函数字面量不会提升
