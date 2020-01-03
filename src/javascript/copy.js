const refer1 = {
  a: 1
}

const refer2 = {
  refer: refer1
}

const origin = {
  a: 1,
  b: '1',
  c: true,
  d: {
    e: 1
  },
  f: [1, 2],
  g: refer2
}

function shadowCopy(origin) {
  let target = {}
  for (const key in origin) {
    target[key] = origin[key]
  }
  return target
}

function isObject(origin) {
  return origin !== null && typeof origin === 'object'
}
function deepCopy(origin, map = new Map()) {
  if (isObject(origin)) {
    let target = Array.isArray(origin) ? [] : {}
    if (map.get(origin)) return map.get(origin)
    map.set(origin, target)
    for (const key in origin) {
      target[key] = deepCopy(origin[key])
    }
    return target
  }
  return origin
}

console.log('shadowCopy:', shadowCopy(origin))
console.log('deepCopy:', deepCopy(origin))
