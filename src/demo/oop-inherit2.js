var Chinese = {
  nation: '中国'
}
var Doctor = {
  career: '医生'
}

//1. Object方法
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
var Doctor = object(Chinese)

//2. 浅拷贝
function extendCopy(p) {
  var c = {}
  for (var i in p) {
    c[i] = p[i]
  }
  c.uber = p
  return c
}
var Doctor = extendCopy(Chinese)

//3.深拷贝
function deepCopy(p, c) {
  var c = c || {}
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = p[i].constructot === Array ? [] : {}
      deepCopy(p[i], c[i])
    } else {
      c[i] = p[i]
    }
    return c
  }
}
