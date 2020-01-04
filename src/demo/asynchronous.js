// 同步(Synchronous)与异步(AsynChronous)
// JS执行环境是单线程的
// 同步模式：后一个任务等待前一个任务结束，然后再执行，执行顺序与任务顺序一致
// 异步模式：每一个任务有一个或者多个回调函数，前一个任务结束后，执行回调函数，后一个任务不等待任务介绍就执行。
// 1. 回调函数
f1()
f2()
//f1是耗时任务，f2写成f1回调函数
function f1(callback) {
  setTimeout(function() {
    callback()
  }, 1000)
}
f1(f2)
//缺点：不利于维护，高度耦合
//2. 事件监听
f1.on('done', f2)
function f1() {
  setTimeout(function() {
    f1.trigger('done')
  }, 1000)
}
//去耦合，实习模块化。缺点：整个程序变成事件驱动型

//3. 发布订阅(观察者模式)
//信息中心，某个任务完成，就像信号中心发布信号，其他任务可以订阅信号
jQuery.subscribe('done', f2)
function f1() {
  setTimeout(function() {
    jQuery.publish('done')
  }, 1000)
}
//优于事件监听

//4. Promise对象
//CommonJS提出的规范，为异步编程提供统一接口
//每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数
f1().then(f2)
function f1() {
  var dfd = $.Deferred()
  setTimeout(function() {
    dfd.resolve()
  }, 500)
  return dfd.promise
}
//回调函数变成链式写法，功能强大
f1()
  .then(f2)
  .then(f3)
f1()
  .then(f2)
  .then(f3)
