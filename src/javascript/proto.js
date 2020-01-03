var a = {
  name: '123'
}

console.log(a.__proto__) // {}

function B() {}
var b = new B()
console.log(b.__proto__) // B {}
console.log(B.prototype) // B {}
console.log(b.__proto__ === B.prototype) // true
console.log(B.prototype.__proto__) // {}

var c = Object.create(a)
console.log(c.__proto__ === a) // true
