var origin = {
    a: 1,
    b: 2
};

for (const property in origin) {
    console.log(property);
}

Object.defineProperty(origin, 'a', {
    enumerable: false
})


for (const property in origin) {
    console.log(origin[property]);
}



// 最好只在Object 遍历数组
var originArray = [1, 2, 4, 6];
originArray.a = 12

for (const property in originArray) {
    console.log(originArray[property]);
}


