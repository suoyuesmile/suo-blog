const object = {
  a: undefined,
  b: 1,
  c: '1',
  d: true,
  e: {},
  f: [],
  g: function() {},
  h: NaN,
  i: null,
  j: new Date(),
  k: new String(),
  l: new RegExp()
}

// 通用方法
for (const key in object) {
  console.log(Object.prototype.toString.call(object[key]))
}

// [object Undefined]
// [object Number]
// [object String]
// [object Boolean]
// [object Object]
// [object Array]
// [object Function]
// [object Number]
// [object Null]
// [object Date]

for (const key in object) {
  console.log(typeof object[key])
}

// undefined
// number
// string
// boolean
// object
// object
// function
// number
// object
// object
// object
// object
