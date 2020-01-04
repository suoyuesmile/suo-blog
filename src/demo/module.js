//1. 原始写法
function m1() {}
function m2() {}
//缺点污染了全局变量

//2. 对象的写法
var module = new Object({
  _count: 0,
  m1: function() {
    //
  },
  m2: function() {
    //
  }
})
module.m1()
module._count = 5
//暴露所有模块成员

//3. 立即执行函数写法
var module1 = (function() {
  var _count = 0
  var m1 = function() {
    //...
  }
  var m2 = function() {
    //
  }
  return {
    m1: m1,
    m2: m2
  }
})()
console.info(module._count) //undefined

//4. 放大模式
var module1 = (function(mod) {
  mod.m3 = function() {
    //
  }
  return m3
})()
//增加新方法

//5. 宽放大模式
var module1 = (function(mod) {
  return mod
})(window.module1 || {})
//立即执行函数里面可以是空对象

//6. 输入全局变量
var module1 = (function($, YAHOO) {
  //
})(jQuery, YAHOO)

//7. CommonJS
var math = require('math')
math.add(2, 3)
//同步加载

//8. AMD(Asynchronous Modules Definition)
require([module], [callback])
require(['math'], function(math) {
  math.add(2, 3)
})

//9. require.js
// js文件过多，依赖更强，依次加载多个js文件
// 加载的时候，网页会停止渲染，加载文件越多，网页失去响应的时间就会越长
// 顺序越加重要，依赖最复杂的必须放在最后
// require.js诞生，实现文件的异步加载，管理模块之间的依赖性
// 使用require.js两种方法，1. 放在网页底部， 2.使用defer asyn = "true"
// 加载自己的代码data-main = "js/main"

//10. 主模块写法
require(['module1', 'module2', 'module3'], function(
  module1,
  module2,
  module3
) {})

//11. 模块加载
require.config({
  baseUrl: 'js/lib',
  path: {
    jQuery: 'jQuery.min',
    underscore: 'underscore.min',
    backbone: 'backbone.min'
  }
})

//12. AMD模块的写法
//math.js
define(function() {
  var add = function(x, y) {
    return x + y
  }
  return {
    add: add
  }
})

define(['mylib'], function() {
  var foo = function() {
    mylib.doSoming()
  }
  return {
    foo: foo
  }
})

//13. 加载非规范模块
////先定义它的特征
require.config({
  shim: {
    underscore: {
      deps: ['underscore', 'jQuery'],
      exports: '_'
    }
  }
})

//14. require.js插件
//domready
require(['domready'], function(doc) {
  //called once the DOM is ready
})

define(['text!review.txt', 'image!cat.jpg'], function(review, cat) {
  console.log(review)
  document.body.appendChild(cat)
})
