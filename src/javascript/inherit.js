// 如果试图引用对象(实例instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性.
// 构造函数、原型、实例关系

/**
 * 构造函数
 * 构造属性方法
 * 原型属性方法
 * 实例属性
 */
function Base() {
  this.property = true
}
Base.prototype.getProperty = function() {
  return this.property
}

/**
 * 原型链继承
 * 原理：基类的实例复制给构造函数的原型
 * 缺点：多个实例对引用类型的操作会被串改
 */
function PrototypeListInherit() {
  this.property = false
}
PrototypeListInherit.prototype = new Base()
var b = new PrototypeListInherit()
console.log(b.getProperty())

/**
 * 构造继承
 * 原理：基类call、this调用
 * 缺点： 只能继承实例，无法继承基类原型的方法
 */
function ConstructInherit() {
  Base.call(this)
}
ConstructInherit.prototype.getProperty = function() {
  return this.property
}
var c = new ConstructInherit()
console.log(c.getProperty())

/**
 * 组合继承
 * 原理：原型链与构造函数的组合，最后改回原型构造的值
 * 优点：既能共享又能单独处理
 */
function ComposeInherit() {
  this.property = false
  Base.call(this)
}
ComposeInherit.prototype = new Base()
ComposeInherit.prototype.constructor = ComposeInherit
var d = new ComposeInherit()
console.log(d.getProperty())

/**
 * 原型继承
 * 原理：空对象为中介
 */
function PrototypeInherit() {}
