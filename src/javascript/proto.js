var a = {
  name: '123'
}

function B() {}
var b = new B()

console.log(a.__proto__) // {}
console.log(b.__proto__) // B {}
console.log(B.prototype) // B {}
console.log(B.__proto__) // [Function]
console.log(b.__proto__ === B.prototype) // true
console.log(B.prototype.constructor === B) // true
console.log(B.prototype.constructor === b.__proto__.constructor)
console.log(B.prototype.__proto__) // {}

var c = Object.create(a)
console.log(c.__proto__ === a) // true

// B 为构造函数
// b 为实例
// B 里面有个原型prototype对象，原型对象里面有个contructor指向自身
// B 里面有个 __proto__ 指向函数，函数里面有个__proto__ 指向对象
// b 里面有个 __proto__ 指向B的原型 b.__proto__ === B.prototype
// 因此 b里面的__proto__ 也有个contructor 指向 B, b.__proto__.constructor === B.prototype.constructor === B
