var origin = {
    a: 2
}

// in 检查对象及其原型链上的属性 无法检查数组
const existIn = 'a' in origin;

// 不会检查原型链上的属性/ 所有普通对象都可以访问，Object.create(null) 不行
const existHasProperty = origin.hasOwnProperty('a');


for(const property in origin) {
    console.log(property);
}

console.log(existIn, existHasProperty);
