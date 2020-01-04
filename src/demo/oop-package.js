// 1.生成实例对象的原始模式
var Cat = {
  name: '',
  color: ''
}
var cat1 = {}
cat1.name = '大毛'
cat1.color = '黄色'
var cat2 = {}
cat2.name = '二毛'
cat2.colot = '黑色'

// 改进
function Cat(name, color) {
  return {
    name: name,
    color: color
  }
}
var cat1 = Cat('大毛', '黄色')
var cat2 = Cat('二毛', '黑色')

// 2.构造函数
function Cat(name, color) {
  this.name = name
  this.color = color
}
var cat1 = new Cat('大毛', '黄色')
var cat2 = new Cat('二毛', '黄色')
alert(cat1.name)
alert(cat1.color)

// 3.Prototype模式
function Cat(name, color) {
  this.name = name
  this.color = color
}
Cat.prototype.type = '猫科动物'
Cat.prototype.eat = function() {
  alert('吃老鼠')
}
var cat1 = new Cat('大毛', '黄色')
var cat2 = new Cat('二毛', '黑色')
alert(cat1.type)
cat1.eat()

alert(Cat.prototype.isPrototypeOf(cat1))
alert(Cat.prototype.isPrototypeOf(cat2))

alert(cat1.hasOwnProperty('name'))
alert(cat1.hasOwnProperty('type'))

alert('name' in cat1)
alert('type' in cat1)

for (var prop in cat1) {
  alert('cat1[' + prop + ']=' + cat1[prop])
}
