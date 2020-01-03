// 函数作用域
// 函数的全部变量都可以在整个函数范围内使用及复用
// 使用函数作用域隐藏部分变量和函数-最小暴露原则

// 规避冲突
// 1.全局命名空间
// 2.模块管理

var a = 2

function foo() {
  var a = 3
  console.log(3)
}

foo()

console.log(a)

// 包装函数缺点
// 1.函数自身污染作用域
// 2.必须显示调用

// 两种解决方案
// 立即执行函数
;(function foo() {
  var a = 3
  console.log(a)
})()

// 函数声明不可以省略函数名，回调参数等可以
// 缺点1:调试困难
// 2.无法递归
// 3.说明不了作用

// 立即执行函数表达式 IIFE（immediately invoked function expression）
// 改进版
;(function() {
  var a = 4
  console.log(a)
})()

// 改进全局参数写法
// var a = 2
// ;(function(global) {
//   console.log(global.a)
// })(window)

// 倒置代码运行顺序
// var d = 2
// ;(function IIFE(def) {
//   def(window)
// })(function def(globle) {
//   console.log(global.d)
// })
