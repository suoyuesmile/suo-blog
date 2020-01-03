// 理解作用域

// 'use strict'

// RHS ERROR ReferenceError: b is not defined
// var a = b

// LHS
c = 2

// 在顶层自动创建一个变量c
console.log(c) // 2

// 严格模式下禁止自动创建变量

// 对变量赋值使用 LHS 查询，= 和传人参数导致关联作用域赋值操作
// 查找变量的值使用RHS查询

// var a = 2
// JavaScript 引擎分两步操作
// 1. var a 在作用域中声明新变量
// 2. a = 2 会使用 LHS 查询对 a 进行赋值操作

// LHS 和 RHS 查询都在当前作用域中开始，当前找不到会向上级作用域继续查找、直至顶层全局作用域
// cat parent