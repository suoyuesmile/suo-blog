var origin = {
    a: 1
}

const descriptor = Object.getOwnPropertyDescriptor(origin, 'a');

Object.defineProperty(origin, 'a', {
    value: 2,
    writable: false,
    // 无法改变
    configurable: false,
    // 无法再通过defineProperty 修改，也无法删除
    emumerable: false
    // 无法通过 for in 来枚举
})


console.log(origin);

origin.a = 3;

console.log(origin);