// 两种
var origin = {
    a: 1,
    b: true,
    c: 'c'
};

var originArr = [1, 3, 4, 5];

// 遍历属性或者下标, 遍历对象

for (const property in origin) {
    console.log(property);
}

for (const property in originArr) {
    console.log(property);
}


// 遍历值, 遍历数组

for (const item of origin) {
    console.log(item);
}

for (const item of originArr) {
    console.log(item);
}



